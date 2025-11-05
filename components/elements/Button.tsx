// /common/Button.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    icon?: React.ReactNode;
    text: string;
    href: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon, text, href, className = '' }) => {
    
    return (
        <Link href={href}>
                <button
                className={`flex items-center w-full p-3 rounded-lg font-medium bg-[#dce9e3] text-[15px] ${className}`}
                >
                    {icon && <span >{icon}</span>}
                    <span>{text}</span>
                </button>
        </Link>
    );
};

export default Button;