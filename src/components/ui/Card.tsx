interface CardProps {
    title: string;
    description: string;
}

export default function Card({ title, description }: CardProps) {
    return (
        <div className="bg-white text-blue-600 rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="opacity-80">{description}</p>
        </div>
    );
}
