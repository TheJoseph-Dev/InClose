<script lang="ts">
    import AddModal from "./AddModal.svelte";


    // Exports
    export let title: string
    export let list: any[] = [];
    export let selectedIndex = 0;
    export let indexOffset = 0;

    export let adding: boolean = false
    export let addEndpoint: string
    export let addModalHTML: string
</script>

<AddModal actionEndpoint={addEndpoint} bind:active={adding}>
    {@html addModalHTML}
</AddModal>

<div class="flex flex-col m-4 p-2 border-black border-[1px] rounded-lg">
    <div class="flex flex-row m-2">
        <h2 class="font-ubuntu font-medium"> {title} </h2>
        <div class="flex-center-row space-x-2 ml-auto">
            <button class="bg-mygreen-500 w-6 h-6 rounded-full text-center p-[6.5px]" on:click={() => {adding = true}}>
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="23.4375" width="6" height="50" rx="3" fill="#FFFFFF"/>
                    <rect y="26.5627" width="6" height="50" rx="3" transform="rotate(-90 0 26.5627)" fill="#FFFFFF"/>
                </svg>                    
            </button>

            <!--
                <button class="bg-red-600 w-6 h-6 rounded-full text-center p-[4px]">
                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17.2168" y="19.4271" width="6" height="50" rx="3" transform="rotate(-45 17.2168 19.4271)" fill="#FFFFFF"/>
                        <rect x="19.4268" y="54.7827" width="6" height="50" rx="3" transform="rotate(-135 19.4268 54.7827)" fill="#FFFFFF"/>
                    </svg>                                      
                </button>
            -->
        </div>
        
    </div>

    <!-- Table -->
    {#each list as l, i }
        <button class="{selectedIndex - indexOffset == i ? "bg-myblue-500 text-white" : "bg-gray-300"} font-ubuntu flex flex-row mt-2 p-2 rounded-lg" on:click={() => {selectedIndex = i + indexOffset}}>
            <h2> {l.name} </h2>
        </button>
    {/each}
</div>