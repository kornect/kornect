import {Icon} from '@iconify/react';
import React from "react";

interface TechStackGroupProps {
    group: TechGroup
}

export interface TechGroup {
    name: string;
    items: TechItem[];
}

export interface TechItem {
    name: string;
    icon: string | null;
}

export function TechStackGroup({group}: TechStackGroupProps) {
    return (
        <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {group.name}
            </h3>
            <ul className="space-y-3">
                {group.items.map(({icon, name}, index) => (
                    <li key={index}
                        className="rounded-lg flex gap-2 border dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-sm text-neutral-700 dark:text-neutral-300 hover:shadow-md transition-all hover:-translate-y-1">
                        {icon ? (
                            <Icon icon={icon} width="20" height="20"/>
                        ) : (
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <span className="text-xs text-gray-500 dark:text-gray-400">{name.substring(0, 2)}</span>
                            </div>
                        )}
                        <span className="text-sm text-center text-gray-700 dark:text-gray-300">{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
