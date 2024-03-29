<script lang="ts">
    // Exports
    export let id = "linear" + Math.random().toString()
    export let colors: string[] = ["#00AD8E", "#2B5A97"]
    export let width = 16

    // Local Data
    const widthRatio = 70/16 // 4.375
</script>


<svg width={width * widthRatio} height="10" viewBox="0 0 {width * widthRatio} 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect height="10" rx="5" fill="url(#{id})" class="w-{width}"/>
    <defs>
        <linearGradient id={id} x1="-2.34477e-07" y1="5.3333" x2={width * widthRatio} y2="5.3333" gradientUnits="userSpaceOnUse">
            
            {#each colors as color, i }
            <stop offset={i} stop-color={color}/>
            {/each}
            
        </linearGradient>
    </defs>
</svg>