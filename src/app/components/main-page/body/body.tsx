"use client";

import Image from "next/image"
import Card from "./card"
import Tariff from "@/app/types/tariff"
import { ChangeEvent, useState, MouseEvent, MouseEventHandler, useMemo, useEffect } from "react";

export default function Body({tariffs, discountFinished=false}:{tariffs:Tariff[], discountFinished:boolean}){
    var index = 0
    // Устанавливаем начальное состояние с сгенерированными genId 
    const [allTariffs, setAllTariffs] = useState<Tariff[]>(() => {
        return tariffs.map(t => ({
        ...t,
        selected: t.is_best || false, // например, сразу выделяем best
        genId: "" + index++
        }));
    });
    
    const [checkboxPolicyConfirmed, setCheckboxPolicyConfirmed] = useState(false)
    var minOtherDiscountPercentage = 50;


    function checkboxClicked(e: ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
        setCheckboxPolicyConfirmed(e.target.checked);
    }

    function getBestTariff():Tariff|undefined {
        return allTariffs.find(value=>value.is_best)
    }

    function buyButtonClicked(e: MouseEvent<HTMLInputElement>) {
        if (!checkboxPolicyConfirmed) {
            const checkboxEl = document.getElementById("policyCheckbox");
            
            if (checkboxEl) {
            // animation
            checkboxEl.classList.add("checkbox-error-animation");
            
            // delete animation after delay
            setTimeout(() => {
                checkboxEl.classList.remove("checkbox-error-animation");
            }, 1500);
            }
            return;
        }
        document.getElementById("buttonBuy")?.classList.toggle("buy-button-clicked-animation")
        setTimeout(()=>{document.getElementById("buttonBuy")?.classList.toggle("buy-button-clicked-animation")}, 1000);
        
    }

    function onCardClick(currTariff: Tariff|undefined) {
        if(!currTariff) return;

       setAllTariffs(prevTariffs =>
        prevTariffs.map(tariff =>
            tariff.genId === currTariff.genId
                ? { ...tariff, selected: true }      // создаём новый объект с selected: true
                : { ...tariff, selected: false }     // и для остальных — selected: false
        ));
    }

    return( 
        <div className="flex flex-col justify-center items-center">
            <div id="chooseTariffText" className="flex flex-row">
                <h1 className="text-3xl sm:text-4xl pt-4 sm:pt-10 text-white font-semibold">Выбери подходящий для себя <span className="text-(--color-highlight-orange)">тариф</span></h1> 
                <div className="hidden sm:block w-[680]"></div>
            </div>
            <div id="bodyMain" className="flex flex-col items-center relative">
                <div id="photoAndCardsComputer" className="flex flex-col sm:flex-row justify-center gap-0 items-center "> 
                    <div id="imageBlock" className="justify-center flex items-start pt-5 ">
                        <Image
                        src={"/sportsman.png"}
                        className="hidden sm:block"
                        alt=""
                        width={560}
                        height={1000}
                        />
                        <Image
                        src={"/sportsman.png"}
                        className="block sm:hidden"
                        alt=""
                        width={200}
                        height={1000}
                        />
                    </div>
                    <div id="cardsAndTextPart" className="flex flex-col justify-start items-center sm:items-start max-w-6xl gap-4 w-full" >

                        <div id="bestCard" className="sm:w-[680] min-h-25 gap-5 sm:min-w-2xl" onClick={()=>onCardClick(getBestTariff())}>
                            <Card isSelected={getBestTariff()?.selected} isFavourite={true} isHorizontalFlow={true} tariff={getBestTariff()} discountFinished={discountFinished} discountPercentage={70}/>
                        </div>
                        
                        <div id="otherCards" className={"flex sm:flex-row flex-col gap-4 justify-between sm:w-[680]"}>
                            {allTariffs
                            .filter(t=>!t.is_best)
                            .map((t)=>{
                                const elem = 
                                    <div  key={t.genId}>
                                        <div className="hidden sm:block sm:w-[210] sm:min-h-45 sm:gap-8 h-full" onClick={()=>onCardClick(t)}>
                                            <Card isSelected={t.selected} isHorizontalFlow={false} tariff={t} discountFinished={discountFinished} discountPercentage={minOtherDiscountPercentage}/>
                                        </div>
                                        <div className="block sm:hidden min-h-25 gap-8 h-full" onClick={()=>onCardClick(t)}>
                                            <Card isSelected={t.selected} isHorizontalFlow={true} tariff={t} discountFinished={discountFinished} discountPercentage={minOtherDiscountPercentage}/>
                                        </div>
                                    </div>;
                                minOtherDiscountPercentage-=10;
                                return(elem)
                                })
                                }
                        </div>

                        <div id="advice" className="min-h-10 sm:min-w-xl bg-(--color-advice-background) rounded-xl p-4 text-white text-sm flex flex-row gap-4">
                            <div className="text-2xl text-(--color-highlight-orange) pl-2">
                                !
                            </div>
                            <div className="flex flex-col ">
                                <text>Следуя плану на 3 месяца и более, люди получают </text>
                                <text>в 2 раза лучший результат, чем за 1 месяц</text>
                            </div>
                        </div>

                        <div id="policyAndBuy" className="sm:block flex flex-col justify-center items-center">
                            <div id="blockCheckbox" className="relative flex flex-row gap-2 pb-4 items-center">
                                <div className="flex flex-col items-start justify-start">
                                    <input id="policyCheckbox" type="checkbox" checked={checkboxPolicyConfirmed} onChange={checkboxClicked} 
                                    className="peer appearance-none rounded-md border-2 border-(--color-card-border) w-9 h-9" />

                                    <svg className="flex-none hidden absolute w-9 h-9 top-0 peer-checked:block pointer-events-none" // обязательно pointer-events-none чтобы клик был по checkbox (stroke= stroke="var(--color-highlight-orange)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round")
                                    fill="var(--color-highlight-orange)" viewBox="0 0 24 24"> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>

                                <div className="flex sm:flex-col text-xs sm:text-sm text-(--color-text-privacy-policy) gap-0 justify-start items-start">
                                    <text>Я согласен с <span className="underline">офертой рекуррентных платежей</span> и <span className="underline">Политикой</span> <span className="sm:hidden underline">конфиденциальности</span></text> 
                                    <div><text className="underline sm:block hidden">конфиденциальности</text></div>
                                </div>
                            </div>

                            <div id="buttonBuy" className="flex bg-(--color-highlight-orange) w-full px-20 sm:w-10 sm:min-w-10 min-h-10 sm:px-40 py-5 justify-center rounded-3xl sm:rounded-xl" onClick={buyButtonClicked}>
                                <text className="text-xl font-semibold">Купить</text>
                            </div>
                            <div className="flex min-h-10 justify-center sm:w-[680] pt-4">
                                <text className=" text-(--color-text-user-agreement) text-xs">Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</text>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}