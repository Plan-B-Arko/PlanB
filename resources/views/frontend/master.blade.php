<!DOCTYPE html>
<html class="no-js" lang="">


<head>
    <meta charset="utf-8">
    <title>FINBUZZ|Home1</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon Start Here -->
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('assets/img/fav.png')}}">
    <!-- Bootstrap Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <!-- Animate Css Start Here -->
    <link rel="stylesheet" href=" {{asset('assets/css/animate.css')}}">
    <!-- Owl Carousel Start Here -->
    <link rel="stylesheet" href="{{asset('assets/vendor/owlcarousel/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/owlcarousel/owl.theme.default.min.css')}}">
    <!-- Nivo Slider Start Here -->
    <link rel="stylesheet" href="{{asset('assets/vendor/nivo-slider/nivo-slider.css')}}">
    <!-- Sal Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/sal.css')}}" type="text/css">
    <!-- Animate Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/animate.min.css')}}">
    <!-- Slick Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/slick.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/slick-theme.css')}}">
   <!-- Meanmenu Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/meanmenu.min.css')}}">
    <!-- All min Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/all.min.css')}}">
    <!-- Style Css Start Here -->
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <!-- Google Font Start Here -->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&amp;display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
</head>
<body class="sticky-header">
   
    <!--=====================================-->
    <!--=   Scroll-up     Start             =-->
    <!--=====================================-->
    <a href="#wrapper" data-type="section-switch" class="scrollup">
        <i class="fas fa-angle-double-up"></i>
    </a>
    <!--=====================================-->
    <!--=   Preloader     Start             =-->
    <!--=====================================-->
    <div id="preloader"></div>
    <div class="wrapper" id="wrapper">
        <!--=====================================-->
        <!--=            Header Start           =-->
        <!--=====================================-->
        @include('frontend.body.header')
        <!--=====================================-->
        <!--=            Slider Start           =-->
        <!--=====================================-->
        @include('frontend.body.slider')
      

       <!-- yield -->
       @yield('content')
       
        <!--=====================================-->
        <!--=            Footer Start           =-->
        <!--=====================================-->
        @include('frontend.body.footer')
        <!--=====================================-->
        <!--=            Offcanvas Start        =-->
        <!--=====================================-->
        <div class="offcanvas-menu-wrap" id="offcanvas-wrap" data-position="right">
            <div class="close-btn offcanvas-close"><i class="fas fa-times"></i></div>
            <div class="offcanvas-content">
                <div class="offcanvas-logo">
                    <a href="index.html"><img src="img/logo/logo2.png" alt="Logo" width="180" height="45"></a>
                </div>
                <ul class="offcanvas-menu">
                    <li class="nav-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="blog1.html">Blog 1</a>
                    </li>
                    <li class="nav-item">
                        <a href="service1.html">Service 1</a>
                    </li>
                    <li class="nav-item">
                        <a href="team1.html">Team 1</a>
                    </li>
                    <li class="nav-item">
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
                <div class="offcanvas-footer">
                    <div class="item-title">Follow Me</div>
                    <ul class="offcanvas-social">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fas fa-rss"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--=====================================-->
        <!--=      Header Search Start          =-->
        <!--=====================================-->
        <div id="header-search" class="header-search">
            <button type="button" class="close">×</button>
            <form class="header-search-form">
                <input type="search" value="" placeholder="Search here..." />
                <button type="submit" class="search-btn">
                    <i class="flaticon-search"></i>
                </button>
            </form>
        </div>
    </div>
    <!-- Jquery Js Start Here -->
    
    <script src=" {{asset('assets/js/jquery-3.4.1.min.js')}}"></script>
    <!-- Bootstrap Js Start Here -->
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <!-- Wow Js Start Here -->
    <script src="{{asset('assets/js/wow.min.js')}}"></script>
    <!-- Owl Carousel Js Start Here -->
    <script src="{{asset('assets/vendor/owlcarousel/owl.carousel.min.js')}}"></script>
    <!-- Sal Js Start Here -->
    <script src="{{asset('assets/js/sal.js')}}"></script>
    <!-- Slick Js Start Here -->
    <script src="{{asset('assets/js/slick.js')}}"></script>
    <script src="{{asset('assets/js/slick.min.js')}}"></script>
    <!-- Nivo Js Start Here -->
    <script src="{{asset('assets/vendor/nivo-slider/jquery.nivo.slider.js')}}"></script> 
    <script src=" {{asset('assets/js/home.js')}}"></script>     
    <!-- Meanmenu Js Start Here -->
    <script src=" {{asset('assets/js/jquery.meanmenu.min.js')}}"></script>
    <!-- Google Map js -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtmXSwv4YmAKtcZyyad9W7D4AC08z0Rb4"></script>
    <!-- Circle Js Start Here -->
    <script src=" {{asset('assets/js/circle-progress.min.js')}}"></script>
    <!-- Main Js Start Here -->
    <script src=" {{asset('assets/js/main.js')}}"></script>
</body>

<!-- Mirrored from radiustheme.com/demo/html/finbuzz/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 30 Dec 2021 17:41:33 GMT -->
</html>