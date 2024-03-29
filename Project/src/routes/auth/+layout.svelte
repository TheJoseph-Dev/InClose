<script lang="ts">
    // Imports
    import Header from "../../components/home/Header.svelte";
    import Footer from "../../components/home/Footer.svelte";
    import type { LayoutData } from "./$types";

    // Exports
    export let data: LayoutData;

    // Local Data
    let isMenuActive = false
    let selectedIndex = 0

    let user = User.fromJSON( data.user )

    import { pageData, deleteSubscription } from "../../stores";
    import { User } from "../../models/User";
    import { goto } from "$app/navigation";
    import MenuCollection from "../../components/home/MenuCollection.svelte";
    
    let lists = [...user.subscriptions, ...user.channels]
    $pageData = lists[0]

    // Handles a delete action from +page.svelte
    // Sets a subscription to be deleted from the user data
    $: if ($deleteSubscription) {
        user.subscriptions = user.subscriptions.filter((s) => s.channelCode != $deleteSubscription.channelCode)
        
        $pageData = user.subscriptions[0]
    }

    // Always update the current subscription on (selectedIndex) change
    $: $pageData = lists[selectedIndex];

    $: if (selectedIndex) { goto('/auth/home') }
</script>

<Header bind:menuActive={isMenuActive}/>
<div class="h-16"></div>

<!-- Menu -->

    <div class="fixed top-0 bg-gray-200 w-[60vw] sm:w-1/3 h-full shadow-2xl pt-16 overflow-y-auto {isMenuActive ? "block transition ease-in-out duration-300 delay-75" : "transition ease-in duration-300 delay-75 -translate-x-96"}">
        
        <div class="font-ubuntu font-bold text-lg m-4">
            <h2> Bem-vindo(a) </h2>
            <span class="text-myblue-500 uppercase"> {user.name}! </span>
        </div>
        
        <MenuCollection title={"Inscrições"} list={user.subscriptions} addEndpoint={'addingSubscription'} 
        addModalHTML={'<div class="flex-center-row m-2"> <div>  <h1 class="font-ubuntu text-white font-semibold text-lg text-center"> Adicionar Inscrição </h1> <input name="channelCode" class="input text-center text-gray-700 bg-gray-100 rounded-2xl m-2" placeholder="Channel Code"> </div> </div>'} 
        bind:selectedIndex={selectedIndex}/>
        <MenuCollection title={"Canais"} list={user.channels} addEndpoint={'addingChannel'} indexOffset={user.subscriptions.length} 
        addModalHTML={'<div class="flex-center-row m-2"> <div>  <h1 class="font-ubuntu text-white font-semibold text-lg text-center"> Criar Canal </h1> <input name="channelName" class="input text-center text-gray-700 bg-gray-100 rounded-2xl m-2" placeholder="Channel Name"> </div> </div>'} 
        bind:selectedIndex={selectedIndex}/>
        
        <button class="button m-4">
            Histórico
        </button>
    </div>
    
    <slot></slot>
    