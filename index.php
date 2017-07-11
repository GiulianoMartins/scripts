<?php get_header('home'); the_post();

$argsRegistrations = array('post_type' =>'vestibular','orderby' => 'title','order' =>'ASC','posts_per_page' => '-1');
$vestibular = new WP_Query($argsRegistrations);

$highlights = new WP_Query(array('post_type' => 'destaques','meta_key' => 'tipo_do_destaque','orderby' => 'menu_order','order' => 'DESC','posts_per_page' => '-1','meta_query' => array(array('key' => 'tipo_do_destaque','value' => 'Noticias','compare' => 'like'))));

$argsUnits = array('post_type' => 'locations','orderby' => 'title','order' => 'ASC','posts_per_page' => '-1');
$units = new WP_Query($argsUnits);

$argsDif = array('post_type' => 'diferenciais','orderby' => 'rand','order' => 'DESC','posts_per_page' => '5');
$diferentials = new WP_Query($argsDif);

$argsCourses = array('post_type' => 'graduations','orderby' => 'title','order' =>'ASC','posts_per_page' => '-1');
$courses = new WP_Query($argsCourses);

$banners = new WP_Query(array('post_type' => 'banners', 'meta_key' => 'relacao_do_conteudo','orderby' => 'menu_order','order' => 'ASC' ,'posts_per_page' => '-1'));

?>
<section id="highlight-courses">

	<div class="row-fluid hidden-xs" id="banner" style="position: relative;top: 0rem;margin-top: 2rem;">
		<div class="container no-padding">
			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
				  	<ol class="carousel-indicators">
				    	<?php
	        			for ($a=0; $a < count($highlights->posts); $a++):
			    			if(count($highlights->posts) == 1):
	        				else:
				    			if($a == 0):
				    				?>
									<li data-slide-to="<?php echo $a; ?>" data-target="#carousel-example-generic" class="active"></li>
								<?php
								else:
									?>
									<li data-slide-to="<?php echo $a; ?>" data-target="#carousel-example-generic"></li>
								<?php
								endif;
							endif;
						endfor;
						?>
				  	</ol>
					<div class="carousel-inner" role="listbox">
						<?php
	        			$i=1;
						while ($highlights->have_posts()) : $highlights->the_post();
							$link_do_destaque = get_field('link_do_destaque');
							$data_de_inicio = get_field('data_de_inicio');
							$data_do_fim = get_field('data_do_fim');
							$tipo_do_destaque = get_field('tipo_do_destaque');
							$unidade_do_destaque = get_field('unidade_do_destaque');
							$img = wp_get_attachment_url(get_post_thumbnail_id());
								if($tipo_do_destaque == 'Noticias'):
									if($i == 1):
										?>
									    <div class="item active">
									    	<img src="<?php echo $img; ?>"  style="height: 480px;width: 100%;background-size: cover; background-position: 50%;"/>
									      	<div class="carousel-caption">
									        	<div class="col-lg-6 content-text">
									        		<div class="titleBanner">
									        			<p>
									        				<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/geotag-white.png" alt="">
									        				<?php the_title(); ?>
									        			</p>
									        		</div>
									        		<div class="contentBanner">
									        			<p><?php echo substr(get_the_excerpt(), 0, 80). '...'; ?></p>
									        			
									        		</div>
									        		<div class="contentBannerLink">
														<a href="<?php echo $link_do_destaque; ?>" class="linkBanner">Leia Mais</a>
									        		</div>
									        	</div>
									      	</div>
									    </div>
										<?php
									else :
										?>
									    <div class="item">
									    	<img src="<?php echo $img; ?>"  style="height: 480px;width: 100%;background-size: cover; background-position: 50%;"/>
									      	<div class="carousel-caption">
									        	<div class="col-lg-6 content-text">
									        		<div class="titleBanner">
									        			<p>
									        				<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/geotag-white.png" alt="">
									        				<?php the_title(); ?>
									        			</p>
									        		</div>
									        		<div class="contentBanner">
									        			<p><?php echo substr(get_the_excerpt(), 0, 80). '...'; ?></p>
									        			
									        		</div>
									        		<div class="contentBannerLink">
														<a href="<?php echo $link_do_destaque; ?>" class="linkBanner">Leia Mais</a>
									        		</div>
									        	</div>
									      	</div>
									    </div>
										<?php
									endif;
								endif;
							$i++;
						endwhile;
					wp_reset_postdata();
					?>
				    </div>
			    </div>
			</div>
	    </div>
	</div>

	<div class="row-fluid hidden-sm hidden-md hidden-lg" id="banner" style="margin-top: 8rem !important;background: #8abe6c; height: 48px;">
		<div class="container no-padding">
			 <?php
				while ($vestibular->have_posts()): $vestibular->the_post();
				$status = get_field('status_do_vestibular');
					if($status == 'Aberto'):
						?>
						<p style="text-align:center;padding-top:1rem;"><a href="<?php bloginfo('url'); ?>/vestibular" style="color:#FFFFFF;text-transform:uppercase;">Clique e faça sua inscrição agora mesmo</a></p>
					 <?php
					endif;
				endwhile;
				wp_reset_postdata();
			?>
	    </div>
	</div>
</section>

<section id="diferentials">
	<div class="row-fluid">
		<div class="container no-padding">
			<div class="col-lg-12 no padding">
				<p id="text-big">as portas estão abertas para o seu crescimento</p>
				<p id="text-small">Descubra os diferenciais da Doctum.</p>
			</div>
			<?php
				while ($diferentials->have_posts()) : $diferentials->the_post();
				$url = get_field('url');
					?>
					<div class="col-lg-2 col-sm-2 col-xs-12 circles hidden-xs">
						<a href="<?php echo $url; ?>">
							<div class="caption">
								<?php 
									$title = $post->post_title;
									$string = substr(get_the_excerpt(), 0, 45);
									$content = preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities(trim($string)));
									if (strlen($title) <= 15):
										?>
										<p class="pLittleDif"><?php echo $title; ?></p>
										<?php 
									elseif (strlen($title) >= 16 and strlen($title) < 17):
										?>
										<p class="pLittleMiddleDif"><?php echo $title; ?></p>
										<?php
									elseif(strlen($title) >= 18 and strlen($title) <= 20):
										?>
										<p class="pMiddleDif" style="top:35%;"><?php echo $title; ?></p>
										<?php
									elseif(strlen($title) > 20 and strlen($title) < 34):
										?>
										<p class="pBigDif"><?php echo $title; ?></p>
										<?php
									elseif(strlen($title) >= 35 ):
										?>
										<p class="pSuperBigDif"><?php echo $title; ?></p>
										<?php
									endif;
								?>
								<div class="caption-content">
									<p><?php echo $content . '...'; ?></p>
								</div>
							</div>
						</a>
					</div>

					<div class="col-lg-2 col-sm-2 col-xs-12 circles hidden-lg hidden-md hidden-sm">
						<a href="<?php echo $url; ?>">
							<!-- <div class="caption" style="width:100%;"> -->
								<?php 
									$title = $post->post_title;
									$string = substr(get_the_excerpt(), 0, 45);
									$content = preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities(trim($string)));
									if (strlen($title) <= 15):
										?>
										<p class="pLittleDif" style="text-align:center;color:#8abe6c;"><?php echo $title; ?></p>
										<?php 
									elseif (strlen($title) >= 16 and strlen($title) < 17):
										?>
										<p class="pLittleMiddleDif" style="text-align:center;color:#8abe6c;"><?php echo $title; ?></p>
										<?php
									elseif(strlen($title) >= 18 and strlen($title) <= 20):
										?>
										<p class="pMiddleDif" style="top:35%;text-align:center;color:#8abe6c;"><?php echo $title; ?></p>
										<?php
									elseif(strlen($title) > 20 and strlen($title) < 34):
										?>
										<p class="pBigDif" style="text-align:center;color:#8abe6c;"><?php echo $title; ?></p>
										<?php
									elseif(strlen($title) >= 35 ):
										?>
										<p class="pSuperBigDif" style="text-align:center;color:#8abe6c;"><?php echo $title; ?></p>
										<?php
									endif;
								?>
								<div class="caption-content">
									<p><?php echo $content . '...'; ?></p>
								</div>
							<!-- </div> -->
						</a>
					</div>
					<?php
				endwhile;
			wp_reset_postdata();
			?>
		</div>
	</div>
	<div class="row-fluid">
		<div class="container no-padding">
			<div class="col-lg-12" style="margin: 5% 0;">
				<a href="<?php bloginfo('url'); ?>/quem-somos/historia" id="what-me">Saiba quem Somos</a>
			</div>
		</div>
	</div>
</section>

<section id="changeGraduation">
	<div class="row-fluid">
		<div class="container">
			<div class="col-lg-8 col-sm-8 col-xs-12 graduations">
				<p>
				<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/mortar-big.png" alt="">
				Escolha sua graduação
				</p>
			</div>
			<div class="col-lg-4 col-sm-4 col-xs-12">
				<select name="select_courses" id="select_courses">
					<option value="">Graduação</option>
					<?php
						while($courses->have_posts()): $courses->the_post();
							?>
							<option value="<?php bloginfo(); ?>/graduacao/?data=<?php the_id(); ?>"><?php the_title(); ?></option>
							<?php
						endwhile;
					wp_reset_postdata();
					?>
				</select>
			</div>
		</div>
	</div>
</section>

<section id="changeUnit">
	<div class="row-fluid">
		<div class="container">
			<div class="col-lg-8 col-sm-8 col-xs-12 units">
				<p>
				<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/geotag-big.png" alt="">
				Conheça as unidades Doctum
				</p>
			</div>
			<div class="col-lg-4 col-sm-4 col-xs-12">
				<select name="unit" id="select_units_map">
					<option value="0">Unidades</option>
					<?php
						while($units->have_posts()): $units->the_post();
							?>
							<option value="<?php the_id(); ?>|<?php the_title(); ?>"><?php the_title(); ?></option>
							<?php
						endwhile;
					wp_reset_postdata();
					?>
				</select>
			</div>
		</div>
	</div>
</section>

<section id="mapas">
	<div class="row-fluid box-maps">
		<div class="col-lg-12" id="map_canvas_full" style="padding:0;"><iframe style="pointer-events: none;"  src="https://www.google.com/maps/d/embed?mid=17q2KgWwkoDPfABkPFdMg6PV1YmI" width="100%" height="600"></iframe></div>
		<div class="col-lg-12" id="map_canvas"></div>
		<div class="list-data"></div>
	</div>
</section>

<section id="options">
    <div class="row-fluid">
        <div class="container no-padding">
            <?php
               // $url = get_permalink(get_the_ID());
                while ($banners->have_posts()) : $banners->the_post();
                $img = wp_get_attachment_url(get_post_thumbnail_id());
                // echo "<pre>";
                // print_r($img);
                // die();
                $type = get_field('tipo_de_pagina');
                $relation = get_field('relacao_do_conteudo');
                $local = get_field('pagina_para_exibicao');
                $nova_aba = get_field('nova_aba');
                	if($type == 'Home'):

                		if(!empty($relation)):

	                        $related = array();
	                        $i=0;
	                        foreach($relation as $value):
	                            $related[$i] = $value;
			                        ?>
			                        <div class="col-lg-4 col-sm-4 col-xs-12" style="margin:25px 0;">
			                            <!-- <a href="<?php echo $link; ?>"> -->
			                           	<a href="<?php echo $related[$i]->guid; ?>" title="<?php echo $related[$i]->post_title; ?>" alt="<?php echo $related[$i]->post_title; ?>" <?php if( $nova_aba == "sim") { ?> target="_blank" <?php } ?> >
			                               <img src="<?php echo $img; ?>" alt="" style="width:100%;background-size:cover;"/>
			                               	<?php //the_post_thumbnail(); ?>
			                           	</a>
			                        </div>
			                        <?php

	                        $i++;
	                        endforeach;
                    	endif;
                    endif;
                endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </div>
</section>

<!-- LOCAL POP UP 

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModall" style="z-index:999999999;">
	  <div class="modal-dialog black">
	    <div class="modal-content" style="box-shadow:none;border-radius:0;">
	      <div class="modal-body">
	      	
	       		<a href="#" ><img src="http://www.doctum.edu.br/wp-content/uploads/2016/12/COMUNICADO-DE-RECESSO-2016facebook.png"></a>
			
	      </div>
	      <div class="modal-footer" style="padding: 5px 15px;">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	      </div>
	    </div>
	  </div>
	</div> -->


<?php get_footer(); ?>