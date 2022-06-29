// loader
$(window).on('load', function () {
    $('.loader').fadeOut(3000);
});
// sidebar Toggle icon
let toggleIcon = document.querySelector('#button');

toggleIcon.addEventListener('click', ()=>{
    document.querySelector('.navbar').classList.toggle('active');
})

// back to top button

function backToTop() {
    $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
    });
}
backToTop();
$(window).on('scroll',function(){
    function scrollTopBtn() {
    var scrollToTop = $('#back-to-top'),
        scroll = $(window).scrollTop();
    if (scroll >= 50) {
        scrollToTop.fadeIn();
    } else {
        scrollToTop.fadeOut();
    }
    }
    scrollTopBtn();
})


// upload file
let uploadedImage = document.querySelector(".uploadFile");
if ( uploadedImage ){
    let ext = name[name.length - 3] + name[name.length - 2] + name[name.length - 1];
        const imgExt = ['jpg', 'JPG', 'PEG', 'peg', 'png', 'PNG', 'SVG', 'svg'];
        let src = null;

        uploadedImage.onchange = function (event) {
        if (event.target.files && event.target.files[0]) {
            selectedFilesCont.innerHTML = '';
            for (let i = 0; i < event.target.files.length; i++) {
                var name = event.target.files[i].name;
                let ext = name[name.length - 3] + name[name.length - 2] + name[name.length - 1];
                const imgExt = ['jpg', 'JPG', 'PEG', 'peg', 'png', 'PNG', 'SVG', 'svg' ];
                if (imgExt.indexOf(ext) > 0) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        src = e.target.result;
                        selectedFilesCont.innerHTML += '<div class="img-uploaded uploaded-image mt-2 mb-2 position-relative">' +
                            '<i onclick="deleteFile(this.parentElement ,\'' + name + '\')" class="fas fa-times remove-appendedd cp"></i>' +
                            '<img class="round0 img-uploded img-contain" src="' + src + '" alt="">' +
                            ' <input type="hidden" value="' + name + '" >   ' +
                            '</div>';
                    }
                    reader.readAsDataURL(event.target.files[i]);
                } else {
                    var name = event.target.files[i].name;
                    selectedFilesCont.innerHTML += '<div   class="file-container round m-1 ">' +
                        '<i onclick="deleteFile(this.parentElement ,\'' + name + '\')" class="fas fa-times remove-appendedd cp cp"></i>' +
                        '<img class="round img-cover overlay-dark" style="width: 100%; height:100%;" src="" alt="">' +
                        '<div style="overflow-wrap: break-word;" class="text-center siz-11 file-name-text m-0 w-75">' +
                        '<p class="uploadedName m-0">' + name + '</p>' +                    
                        '<input class="file-uploded" type="text" value="' + name + '" disabled hidden class="file-uploded m-0">' +
                        '</div>' +
                        '</div>';

                }
            }
        }
    }
    // deleteFile
    function deleteFile(ele, name) {
        const chat_files = document.querySelector(".uploadFile");
        let files = new DataTransfer();
        for (let i = 0; i < chat_files.files.length; i++) {
            if (chat_files.files[i].name == name) {
                continue;
            }
            files.items.add(chat_files.files[i]);
        }
        chat_files.files = files.files;
        $(ele).remove();
    }
}
