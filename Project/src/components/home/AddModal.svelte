<script lang="ts">
    import { enhance, type SubmitFunction } from "$app/forms";


    // Exports
    export let active = false
    export let actionEndpoint: string

    const submit: SubmitFunction = async ({ data }) => {
        console.log(data)
        active = false
    }
</script>

{#if active}
<div class="fixed z-10 top-16 left-0 w-full h-full overflow-hidden bg-black bg-opacity-20">
    
    <div class="relative">
        <div class="flex-center-row mt-12">
            
            <form action="?/{actionEndpoint}" method="POST" use:enhance={submit}>

                <div class="bg-myblue-500 rounded-lg w-[85vw] xs:w-[26rem] h-[16rem] p-4 shadow-lg">
                    <div class="flex flex-row">
                        <button type="button" class="text-gray-200 bg-transparent hover:bg-gray-200 hover:bg-opacity-20 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="popup-modal" on:click={() => {active = false}}>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div>
                        <slot/>
                    </div>
                    
                    <div class="flex-center-row">
                        <button type="submit" class="button m-2">Adicionar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
{/if}