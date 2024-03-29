<script lang="ts">
    import type { PageData } from "./$types";
    import Dropdown from "../../../components/Dropdown.svelte";
    import { pageData, deleteSubscription } from "../../../stores";
    import { User } from "../../../models/User";
    import type { Subscription } from "../../../models/Channel";
    import { API, Method } from "../../../models/API";

    // Exports
    export let data: PageData;
    
    // Local Data
    let isOptionsActive = false
    let selectedOptionAction = ''
    let optionButtons = ["Excluir Inscrição"]

    $: if (selectedOptionAction == optionButtons[0]) {
        selectedOptionAction = ''

        deleteCurrentSubscription()
    }

    async function deleteCurrentSubscription() {
        await new API().request('/api/fauna/auth/subscription', Method.DELETE, {
            session_uid: data.session_uid,
            subscription: JSON.stringify( $pageData )
        })
        
        $deleteSubscription = <Subscription>$pageData
    }

    function generateCode() {
        const num = Math.round(Math.random() * 100)
        return num
    }

    let code = generateCode()

    

    let user = User.fromJSON( data.user )
    console.log($pageData)
</script>


<svelte:head>
    <title> Home </title>
</svelte:head>

{#if typeof $pageData.channelCode !== undefined }
<!-- Options Button -->
<div class="flex flex-row">
    <div class="ml-auto">
        <button class="bg-mygreen-400 m-3 rounded-full w-10 h-10 scale-90" on:click={() => {isOptionsActive = !isOptionsActive}}>
            <div class="flex-center-row space-x-1">
                <div class="bg-myblue-500 w-1 h-1 rounded-full"></div>
                <div class="bg-myblue-500 w-1 h-1 rounded-full"></div>
                <div class="bg-myblue-500 w-1 h-1 rounded-full"></div>
            </div>
        </button>
        
        <div class="absolute right-0">
            <Dropdown 
                bind:active = {isOptionsActive}
                list = {optionButtons} 
                colors= {['bg-red-600 hover:bg-red-700', 'bg-green-600']}
                dropdownClass={"w-[8rem] sm:w-[10rem] bg-gray-100 rounded-md shadow-md"}
                buttonClass={"button my-1 mx-2"}
                bind:currentElement = {selectedOptionAction}
            />
        </div>
    </div>
</div>

<div class="flex-center-row">
    <div>
        <div class="flex-center-row m-8">
            <h1 class="text-2xl font-ubuntu font-medium text-center"> 
                {$pageData.name}
            </h1>
        </div>

        <div class="flex-center-row">
            <div class="bg-myblue-800 w-48 h-48 p-5">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={$pageData.name}{code}JosephCoder&bgcolor=00D1AC&color=003F79&qzone=2&margin=0&format=png" alt="">
            </div>
        </div>

        <div class="block text-myblue-500 font-ubuntu font-medium text-center whitespace-nowrap flex-center-col m-4">
            <span>{$pageData.credits}</span>
            <span> credits </span>
        </div>

        <div class="flex-center-row">
            <div class="flex-center-col space-y-3 m-4 my-12">
                <button class="button bg-mygreen-400 hover:bg-mygreen-500 w-40" on:click={() => {code = generateCode()}}> Generate Code </button>
                <button class="button bg-mygreen-400 hover:bg-mygreen-500 w-40"> Transfer </button>
            </div>
        </div>
    </div>

</div>

{:else}
<div class="flex-center-row">
    <div class="mt-12">
        <div>
            <h1 class="font-ubuntu font-medium text-xl text-center text-gray-700"> Parece que você ainda
                 <span class="text-red-500"> não </span> tem inscrições...
            </h1>

            <div class="flex-center-row m-4">
                <img src="/EmptySubs.png" alt="">
            </div>
        </div>
        
        <div class="flex-center-col mt-12">
            <h2 class="font-ubuntu font-medium text-center text-gray-700"> Adicione uma <span class="text-mygreen-500">inscrição:</span> </h2>
            
            <div class="flex-center-row m-4">
                <button class="button w-12 h-12 rounded-full p-3"> 
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="23.4375" width="6" height="50" rx="3" fill="#FFFFFF"/>
                        <rect y="26.5627" width="6" height="50" rx="3" transform="rotate(-90 0 26.5627)" fill="#FFFFFF"/>
                    </svg> 
                </button>
            </div>
        </div>
    </div>
</div>
{/if}