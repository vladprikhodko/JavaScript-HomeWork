    $(document).ready(function () {

        $('.block__header').click(function () {
            $(this).toggleClass('in').next().slideToggle();
            $('.block__header').not(this).removeClass('in').next().slideUp();
        });

    });