function createVideoElement(e){var t=$('<div class="flex-video widescreen"><iframe src="http://www.youtube.com/embed/'+e+'?autoplay=1" frameborder="0" allowfullscreen=""></iframe></div>');return t}$(document).ready(function(){$(".video,#additional_videos a").click(function(){var e=$(this).attr("href").split("?v=")[1],t=$(this).attr("title"),o=createVideoElement(e,t);return $(".modal-content").html(o),$("#modal").modal({backdrop:!0}),!1}),$("#modal").on("hidden.bs.modal",function(){$(".modal-content").html("")})});