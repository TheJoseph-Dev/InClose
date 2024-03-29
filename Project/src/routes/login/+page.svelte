<script lang="ts">
    // Imports
    import type { PageData } from "./$types";
    import { applyAction, enhance, type SubmitFunction } from "$app/forms";
    import { goto } from "$app/navigation";


    export let data: PageData

    // Local Data
    let registering = data.signinUp

    let emailField = ''
    let passwordField = ''
    let nameField = ''

    let errorMsg = ''
    $: failInputClass = (errorMsg == '' ? '' : 'border-red-500 text-red-300')

    const login: SubmitFunction = async ({ form, data, action, cancel }) => {
        console.log(data.values())

        errorMsg = '';

        return async ({ result, update }) => {
            
            // Handles the action in on based on result.status
            switch (result.status) {
                case 303: applyAction(result); break;
                case 501: errorMsg = 'User does not exist'; emailField = ''; break;
                case 502: errorMsg = 'Password does not match'; passwordField = ''; break;
                default: break;
            }
        }
    }


</script>

<svelte:head>
    <title>Login</title>
</svelte:head>


<div class="absolute top-0 -z-10 w-full overflow-hidden">
    <svg viewBox="0 0 10000 1024" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[100vh]">
        <g transform="">
            <rect width="100%" height="100%" fill="url(#paint0_linear_10_35)"/>
          
            <path d="M260 423.628V382.517C260 380.372 262.186 378.92 264.163 379.752L315.14 401.201C317.629 402.248 317.576 405.793 315.057 406.765L264.08 426.427C262.114 427.185 260 425.734 260 423.628Z" fill="#00AD8E"/>
            
            <g class="animate-pulse">
                <path d="M257 427.692V378.445C257 376.319 259.151 374.868 261.123 375.663L324.803 401.357C327.346 402.383 327.293 406.002 324.721 406.953L261.041 430.506C259.082 431.23 257 429.781 257 427.692Z" stroke="#00A368" stroke-width="2"/>
            </g>
            <g class="animate-pulsing-wave" transform="">
                <circle cx="244" cy="376" r="7.5" class="stroke-myyellow-500"/>
            </g>
            <circle cx="244" cy="376" r="5" fill="#00AD8E"/>
            <rect x="243" y="381" width="2" height="76" fill="#00AD8E"/>
            <path d="M6 763.734C6 763.316 6.08822 762.9 6.25811 762.517C99.2397 552.996 228.704 374.958 317.5 490.34C390 584.546 472.5 686.968 622.5 808.011C700.952 871.319 751.767 886.519 862.915 1021.04C864.528 1022.99 863.195 1026 860.663 1026H8.99999C7.34314 1026 6 1024.66 6 1023V763.734Z" fill="#075195"/>
            <path d="M-2 611.622C-2 611.32 -1.94859 611.001 -1.8589 610.712C58.5233 416.634 73.4897 502.61 155 547.5C224 585.5 310 782 479.5 751C548.469 738.386 642.342 953.529 794.653 1019.58C797.749 1020.92 796.81 1026 793.435 1026H1.00002C-0.656832 1026 -2 1024.66 -2 1023V611.622Z" fill="#197C93"/>
            <g filter="url(#filter0_d_10_35)">
                <path d="M-2.5 665.894C-2.5 665.01 -2.08169 664.147 -1.4057 663.577C167.741 521.159 223.609 558.115 274 611.5C347.688 689.566 470.884 805.564 553.5 880C599.463 921.412 608.149 988.919 731.483 1018.81C735.094 1019.68 734.495 1026.5 730.779 1026.5H0.500001C-1.15685 1026.5 -2.5 1025.16 -2.5 1023.5V665.894Z" fill="#00AD8E" fill-opacity="0.92" shape-rendering="crispEdges"/>
            </g>
        </g>
        <defs>
        <filter id="filter0_d_10_35" x="-22.5" y="546.002" width="776.4" height="502.498" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_35"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_35" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_10_35" x1="0" y1="0" x2="1440" y2="1175.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#075195"/>
        <stop offset="0.319012" stop-color="#065D94"/>
        <stop offset="1" stop-color="#00AD8E"/>
        </linearGradient>
        </defs>
    </svg>

</div>

<div class="absolute top-2 left-10">
    <div class="flex flex-row -ml-6 xs:ml-6 xs:pt-4 scale-[0.8] xs:scale-100">
        <img src="symbol.png" alt="" class="w-12 lg:w-16 h-12 lg:h-16">
        <h1 class="font-bold font-ubuntu text-xl lg:text-xl text-white m-2 lg:m-4"> InClose </h1>
    </div>
</div>

<!-- Login Form -->
<section>
    <div class="flex-center-row mt-16 xs:mt-0">
        <div class="flex-center-row bg-myblue-800 w-[85vw] {registering ? "h-[34rem]" : "h-[30rem]"} xs:w-[50vw] xs:h-[100vh] xs:ml-auto mt-auto rounded-xl xs:rounded-none">
            <form action="?/{registering ? "register" : "login"}" method="POST" use:enhance={login}>
                <div class="bg-myblue-500 w-[75vw] xs:w-[42vw] {registering ? "h-[32rem] sm:h-[28rem]" : "h-[28rem] sm:h-[24rem]"} rounded-xl m-4 p-2">
                    <div class="flex flex-col sm:flex-row">
                        <h1 class="text-white font-ubuntu font-bold text-2xl m-4 mt-2"> LOGIN </h1>

                        {#if !registering}
                        <div class="text-sm font-ubuntu text-white font-medium whitespace-nowrap m-3 sm:ml-auto">
                            <h2> Não tem conta? </h2>
                            <button type="button" class="bg-transparent text-mygreen-500 font-bold" on:click={() => {registering = true}}> Register </button>
                        </div>
                        {:else}
                        <div class="text-sm font-ubuntu text-white font-medium whitespace-nowrap m-3 sm:ml-auto">
                            <h2> Já tem conta? </h2>
                            <button type="button" class="bg-transparent text-mygreen-500 font-bold" on:click={() => {registering = false}}> Login </button>
                        </div>
                        {/if}
                    </div>
                    
                    {#if !registering}
                    <div class="flex-center-col space-y-8 my-6 mx-2">
                        <input name="email" type="email" class="input text-white border-b-[1.5px] {errorMsg.includes('User') ? failInputClass : ''}" placeholder="Email" bind:value={emailField}>
                        <input name="password" type="password" class="input text-white border-b-[1.5px] {errorMsg.includes('Password') ? failInputClass : ''}" placeholder="{errorMsg.includes('Password') ? errorMsg : 'Password'}" bind:value={passwordField}>
                    </div>
                    {:else}
                    <div class="flex-center-col space-y-8 my-6 mx-2">
                        <input name="name" type="text" class="input text-white border-b-[1.5px]" placeholder="Name" bind:value={nameField}>
                        <input name="email" type="email" class="input text-white border-b-[1.5px] {errorMsg.includes('User') ? failInputClass : ''}" placeholder="Email" bind:value={emailField}>
                        <input name="password" type="password" class="input text-white border-b-[1.5px] {errorMsg.includes('Password') ? failInputClass : ''}" placeholder="Password" bind:value={passwordField}>
                    </div>
                    {/if}

                    <div class="flex-center-row mt-24">
                        <button type="submit" class="button bg-mygreen-500 px-4"> {registering ? "REGISTAR" : "ENTRAR"} </button>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
</section>