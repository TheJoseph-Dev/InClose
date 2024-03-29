<script lang="ts">

    // Export
    export let list: Array<string> // The dropdown list to be displayed
    export let colors = ['bg-green-600']
    export let active:boolean = false

    export let currentElement: string; // The current selected element from the list

        // Default Tailwind classes 
    export let dropdownClass = "z-10 w-[50vw] md:w-[24rem] bg-gray-100 rounded divide-y divide-gray-100 shadow absolute"
    export let buttonClass = "block py-2 px-4 hover:bg-gray-200"
    export let buttonType: "button" | "submit" = "button"
</script>

{#if active }
    <div class="flex-center-row mr-8">
        <!-- Dropdown menu -->
        <div id="dropdown" class={dropdownClass}>
            <ul class="py-1 text-sm text-gray-700 overflow-y-auto h-20 flex flex-col" aria-labelledby="dropdownDefault">
            
            {#each list as element, i }
            <li class="flex flex-col">
                <button type={buttonType} class="{buttonClass} {colors[i]}" on:click={() => {currentElement = element; active = false}}>{element}</button>
            </li>
            {/each}
            </ul>
        </div>
    </div>
{/if}