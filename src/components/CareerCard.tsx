type Props = {
    title: string;
    period: string;
    description: string;
};

    export default function CareerCard({ title, period, description }: Props) {
        return (
        <div className="bg-white text-black rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{period}</p>
            <p className="mt-2">{description}</p>
        </div>
    );
}
