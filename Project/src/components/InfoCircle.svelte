<script lang="ts">
    export let imgsrc: string
    export let vertical = true
    export let invert = false

</script>

<div class="m-2">
    {#if !invert}
        <div class="flex-center-row">
            <img src={imgsrc} alt="" class="w-20 h-20 transition ease-in-out delay-75 duration-200 hover:scale-105">
            {#if !vertical}
                <slot/>
            {/if}
        </div>
        
        {#if vertical}
            <slot/>
        {/if}

    {:else}
    
    {#if vertical}
        <slot/>
    {/if}

    <div class="flex-center-row">
        {#if !vertical}
            <slot/>
        {/if}
        <img src={imgsrc} alt="" class="w-20 h-20 transition ease-in-out delay-75 duration-200 hover:scale-105">
    </div>
    {/if}
</div>