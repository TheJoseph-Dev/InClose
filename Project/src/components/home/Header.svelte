<script lang="ts">
    import { goto } from "$app/navigation";

    // Imports
    import Dropdown from "../Dropdown.svelte";

    // Exports
    export let user: string = ""; // User to info button

    export let menuActive = false

    // Local Data
    let isProfileDropdownActive = false
    let currentDropdownElement = ''

    $: if (currentDropdownElement == "Logout") {
        currentDropdownElement = ""

        logout();
    }


    // Logs out the user (if auth)
    async function logout() {
        await fetch('/api/firebase/logout', {
            method: 'GET'
        });
        
        goto("/login");
    }
</script>

<div class="fixed top-0 z-10 w-full h-16 bg-blue-900 flex flex-row p-2">
    <button class="" on:click={() => {menuActive = !menuActive;}}>
        <div class="bg-mygreen-400 rounded-full w-12 h-12 p-3 scale-75 flex-center-col">
            <div class="bg-myblue-500 rounded-lg w-6 h-1"></div>
            <div class="bg-myblue-500 rounded-lg w-6 h-1 my-1"></div>
            <div class="bg-myblue-500 rounded-lg w-6 h-1"></div>
        </div>
    </button>

    <button class="ml-auto bg-gray-400 rounded-full w-12 h-12 p-3 scale-75" on:click={() => {isProfileDropdownActive = !isProfileDropdownActive}}> </button>
</div>

<div class="{isProfileDropdownActive ? "absolute" : "fixed"} w-full">
    <div class="flex flex-row justify-end mr-10 sm:mr-16 mt-16">
        <Dropdown 
        bind:active = {isProfileDropdownActive}
        list = {["Logout"]} 
        dropdownClass={"z-10 w-[8rem] sm:w-[10rem] bg-gray-100 rounded-md shadow-md absolute"}
        buttonClass={"button my-1 mx-2"}
        bind:currentElement = {currentDropdownElement}
        />
    </div>
</div>