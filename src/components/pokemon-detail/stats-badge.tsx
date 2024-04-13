export default function StatsBadge({stats}: {stats: string}){
    return (
        <div className="flex justify-center">
            <img src={stats} alt="pokemon" className="w-48 h-48"/>
        </div>
    )
}