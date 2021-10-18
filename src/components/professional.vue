<template>
<div id="list">
    <p>{{pro.name}}</p>
</div>
</template>

<script>
export default {
    props: {
        pro: {type: Object, required: true}
    }
}
</script>