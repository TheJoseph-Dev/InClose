<script lang="ts">
    import Separator from "../../components/Separator.svelte";
    import InfoCircle from "../../components/InfoCircle.svelte";
    import { goto } from "$app/navigation";
</script>

<svelte:head>
    <title> Main </title>
</svelte:head>

<!-- SubHeader -->
<div class="relative z-10">

    <div class="w-full relative -z-10">
        
        <svg viewBox="0 0 1440 490" class="w-full top-0 absolute fill-current" xmlns="http://www.w3.org/2000/svg">
            
            <rect width="1440" height="388" fill="url(#paint0_linear_15_5)"/>
            <g transform="translate(0, -50)">
                <g transform="translate(0, -2)"filter="url(#filter0_d_15_5)">
                    <path d="M353 438C437.257 341.677 508.237 296.99 682.368 244.36C771.981 217.275 722.199 179.814 867.223 92.4275C971.152 29.8033 1361.28 51.7131 1456 51.7131V438H353Z" fill="#075195" class="transition delay-[50ms] duration-500 hover:-translate-x-3"/>
                </g>
                <g transform="translate(0, -2)" filter="url(#filter1_d_15_5)">
                    <path d="M566 438C687.297 391.5 739.928 365.763 836.437 228.5C885.653 158.5 1076.94 134 1161.33 49C1260.32 49 1382.32 49 1459 49V438H566Z" fill="#2B5A97" class="transition delay-[50ms] duration-500 hover:-translate-x-2"/>
                </g>
                <path d="M799 437C888.241 390.5 950.813 288.737 1067.24 229C1131.31 196.124 1166.8 71.2269 1237 48C1309.83 48 1399.58 48 1456 48V437H799Z" fill="#197C93" class="transition delay-[50ms] duration-[400ms] hover:-translate-x-2"/>
                <path d="M973 437C991.621 400.333 1054.05 319.4 1154.81 289C1280.75 251 1406.18 182.5 1459 86V437H973Z" fill="#00AD8E" fill-opacity="0.79" class="transition delay-75 duration-300 hover:-translate-x-2"/>
            </g>
            <defs>
                <filter id="filter0_d_15_5" x="301" y="0" width="1203" height="490" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-2" dy="2"/>
                    <feGaussianBlur stdDeviation="25"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_5"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_5" result="shape"/>
                </filter>
                <filter id="filter1_d_15_5" x="544" y="31" width="933" height="429" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-2" dy="2"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_5"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_5" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_15_5" x1="112" y1="-24.7606" x2="884.5" y2="912.74" gradientUnits="userSpaceOnUse">
                    <stop offset="0.302814" stop-color="#00488A"/>
                    <stop offset="1" stop-color="#00AD8E"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
    
    <!-- SubHeader Content -->
    <div class="pt-2 pl-2 w-[40vw] ml-2">

        <div class="flex flex-row -ml-6 xs:ml-6 sm:pt-4 scale-[0.8] xs:scale-100">
            <img src="symbol.png" alt="" class="w-12 lg:w-16 h-12 lg:h-16">
            <h1 class="font-bold font-ubuntu text-lg lg:text-xl text-white m-2 lg:m-4"> InClose </h1>
        </div>
        
        <div class="text-white text-[2vw] sm:text-lg font-ubuntu font-medium block whitespace-nowrap xs:ml-6 mt-auto xs:mt-4">
            <h2>SUA SOLUÇÃO FINANCEIRA</h2>
            <h2>EM PAGAMENTOS</h2>
        </div>
    </div>
</div>


<!-- Main Content -->
<main>

    <!-- Welcome Message -->
    <div class="flex-center-row space-x-6 mt-[20vw]">

        <Separator id={'l1'} colors={["#2B5A97", "#00AD8E"]}/>

        <div class="flex-center-row whitespace-nowrap font-bold -mt-1 space-x-1 text-sm">
            <h1>Bem Vindo ao </h1>
            <h1 class="text-green-500"> InClose </h1>
        </div>

        <Separator id={'l2'} colors={["#00AD8E", "#2B5A97"]}/>
        
    </div>

    <!-- Info Text -->
    <section class="mt-20">
        <div class="flex-center-row space-x-4 p-3">
            <h2 class="text-myyellow-500 text-lg xs:text-2xl font-ubuntu font-medium">ASSINE</h2>
            <h2 class="text-myblue-450   text-lg xs:text-2xl font-ubuntu font-medium">PAGUE</h2>
            <h2 class="text-green-500  text-lg xs:text-2xl font-ubuntu font-medium">USUFRUA</h2>
        </div>

        <div class="flex-center-row mt-12">
            <p class="text-lg text-center font-ubuntu w-1/2">
                Fornecemos um sistema de pagamento seguro e completo
                para lugares fechados e acesso remoto ao cliente
            </p>
        </div>

        <div class="flex-center-row mt-12">
            <button class="button" on:click={() => {goto("login?sign=up")}}>
                REGISTRAR-SE
            </button>
        </div>
    </section>

    <div class="flex-center-row mt-12 ml-4">
        <Separator id={'l1'} width={40}/>
    </div>

    <section class="flex-center-row">
        <div class="bg-gray-100 w-[80vw] pb-2 pr-2 mt-8 rounded-lg shadow-md overflow-hidden">
            <div class="relative">
                <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute">
                    <g transform="scale(0.4)">
                        <path d="M431.5 0C445.5 67.5 446.7 215 339.5 265C205.5 327.5 32.5 330.5 0 440.5V0H431.5Z" fill="#1F4690"/>
                    </g>
                </svg>
                <div class="absolute z-10 text-white font-ubuntu font-bold text-xl w-[40vw] block whitespace-nowrap m-4 mb-8">
                    <h1>COMO</h1>
                    <h1>FUNCIONA</h1>
                </div>
            </div>

            <div class="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 p-1 ml-4 mt-32">
                <InfoCircle imgsrc="main/CoinCircle.png">
                    <div class="font-ubuntu font-medium text-center">
                        <h2>
                            Faça o depósito prévio
                            dos
                        </h2>
                        <span class="text-mygreen-500">créditos</span>
                    </div>
                </InfoCircle>
                <InfoCircle imgsrc="main/CodeCircle.png">
                    <div class="font-ubuntu font-medium text-center">
                        <h2>
                            Obtenha o
                        </h2>
                        <span class="text-myblue-500">código</span>
                        <h2> do cliente</h2>
                    </div>
                </InfoCircle>
                <InfoCircle imgsrc="main/SecureCircle.png">
                    <div class="font-ubuntu font-medium text-center">
                        <h2>
                            Negocie a
                        </h2>
                        <span class="text-myblue-500">transação</span>
                        <h2> com o cliente</h2>
                    </div>
                </InfoCircle>
                <InfoCircle imgsrc="main/DoneCircle.png">
                    <div class="font-ubuntu font-medium text-center">
                        <h2>
                            Finalize a
                        </h2>
                        <span class="text-myyellow-500">compra</span>
                        <h2> debitando os </h2>
                        <span class="text-mygreen-500">créditos</span>
                    </div>
                </InfoCircle>
            </div>
        </div>
    </section>

    <div class="flex-center-row mt-8 ml-4">
        <Separator id={'l2'} width={40}/>
    </div>

    <div class="mr-auto w-full mt-8 mb-16">
        <InfoCircle imgsrc="main/CoinsCircle.png" vertical={false}>
            <div class="ml-2">
                
                <div class="flex-center-row font-medium font-ubuntu text-xl m-2">
                    <h2> Adeus </h2>
                    <span class="text-green-500 ml-1">fichas</span>
                </div>
                
                <div class="font-ubuntu text-lg m-2">
                    <p class=""> 
                        Gerencie compra e venda
                        de um local específico utilizando
                    </p>
                    
                    <span class="text-myblue-500"> créditos virtuais </span>
                </div>
            </div>
        </InfoCircle>
    </div>

    <div class="ml-auto w-full mt-8 mb-16">
        <InfoCircle imgsrc="main/FastCircle.svg" vertical={false} invert={true}>
            <div class="mr-4">
                
                <div class="flex-center-row font-medium font-ubuntu text-xl m-2">
                    <h2> Sem </h2>
                    <span class="text-myblue-500 ml-1">demora</span>
                </div>
                
                <div class="font-ubuntu text-lg text-right m-2">
                    <div class="xs:flex flex-row">
                        <p class="whitespace-nowrap"> 
                            Automatize e
                        </p>
                        <span class="text-green-500 mx-1"> acelere </span>
                    </div>
                    <p class=""> 
                        o pagamento
                        dos clientes
                    </p>
                </div>
            </div>
        </InfoCircle>
    </div>

    
</main>