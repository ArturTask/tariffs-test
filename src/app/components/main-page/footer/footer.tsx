export default function Footer(){
    return (
    <div className="flex flex-row justify-center items-center w-full p-2">
        <div className="sm:w-[1000] sm:h-50 border border-(--color-card-border) rounded-4xl p-5 flex flex-col items-center sm:items-start justify-around gap-5 sm:gap-0">
            <div id="guarantee" className="bg-(--color-advice-background) rounded-4xl w-fit p-4 border-2 border-(--color-refund-gurantee)">
                <text className="text-(--color-refund-gurantee) sm:text-2xl text-xl">гарантия возврата 30 дней</text>
            </div>
            <div className="flex flex-row">
                <div className="text-(--color-text-refund-gurantee) sm:text-xl text-base">Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.</div> 
            </div>
        </div>
        <div className="hidden sm:block sm:w-[350]"></div>
    </div>
);
}