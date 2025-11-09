import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // pakai key yang lebih kuat
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;

    let query = supabase
      .from('paket_umroh')
      .select('*')
      .range(offset, offset + limit - 1)
      .order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching packages:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data ?? []);
  } catch (error: any) {
    console.error('Unexpected error in GET /api/paket:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.price || !body.duration) {
      return NextResponse.json({ error: 'Title, price, and duration are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('paket_umroh')
      .insert([{
        title: body.title,
        price: body.price,
        date: body.date,
        duration: body.duration,
        airline: body.airline || '',
        imagesrc: body.imageSrc || body.imagesrc || '',
        link: body.link || '',
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('Error adding package:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: data?.[0] });
  } catch (error: any) {
    console.error('Unexpected error in POST /api/paket:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.id) {
      return NextResponse.json({ error: 'ID is required for updating' }, { status: 400 });
    }

    // Prepare update object without the ID
    const { id, ...updateData } = body;
    
    const { data, error } = await supabase
      .from('paket_umroh')
      .update(updateData)
      .eq('id', id);

    if (error) {
      console.error('Error updating package:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data });
  } catch (error: any) {
    console.error('Unexpected error in PUT /api/paket:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required for deletion' }, { status: 400 });
    }

    const { error } = await supabase
      .from('paket_umroh')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting package:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Package deleted successfully' });
  } catch (error: any) {
    console.error('Unexpected error in DELETE /api/paket:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
