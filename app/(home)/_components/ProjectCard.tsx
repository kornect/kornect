import {ExternalLink} from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export function ProjectCard({title, description, tags, link}: ProjectCardProps) {
    return (
        <div
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl">{title}</h4>
                <a
                    href={link}
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label={`View ${title}`}
                >
                    <ExternalLink className="w-5 h-5"/>
                </a>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
}
