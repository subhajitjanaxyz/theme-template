<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>" class="no-js">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div class="container-fluid newcolorforzyzmenu position-static">



        <div class="container p-0 navbarea d-flex ">
            <div class="imgforbd d-flex justify-content-center align-items-center">
                <!-- <img src="<?php echo get_theme_mod('logoChange'); ?>" alt="logo"> -->
                 <h2 class="text-white">NEW COMPANY</h2>
            </div>


            <div class="navbar-area ">

            <div class="d-lg-none h-100 d-flex justify-content-end    align-items-center ">
            <i class="fa-solid fa-bars fs-3" id="menu_click"></i>
            </div>




                <ul class=" ulgrop justify-content-lg-end  mb-0 d-none d-lg-flex "  id="menu_show">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li>
                        <a href="#">DropDown</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </div>
           

        </div>
    </div>



    