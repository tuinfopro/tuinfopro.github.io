<script type="text/javascript">
$(function() {
$("img[data-original]").lazyload({
event : "sporty",
effect: "fadeIn"
});
});
$(window).bind(“load”, function() {
var timeout = setTimeout(function() {
$(“img[data-original]”).trigger(“sporty”)
}, 2000);
});
</script>
