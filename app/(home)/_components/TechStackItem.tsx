import {Icon} from '@iconify/react';

interface TechStackItemProps {
    name: string;
    icon: string | null;
}

export function TechStackItem({name, icon}: TechStackItemProps) {
    return (
        <div
            className="flex flex-col items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
            {icon ? (
                <Icon icon={icon} width="48" height="48"/>
            ) : (
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">{name.substring(0, 2)}</span>
                </div>
            )}
            <span className="text-sm text-center text-gray-700">{name}</span>
        </div>
    );
}
