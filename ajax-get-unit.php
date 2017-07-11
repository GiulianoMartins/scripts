<?php
//LISTA AS UNIDADES NO MAPA DA HOME

add_action('wp_ajax_nopriv_get_select_data_unit', 'get_select_data_unit');
add_action('wp_ajax_get_select_data_unit', 'get_select_data_unit');

function get_select_data_unit(){

	$path = $_POST['unit'];
	$fields = explode('|',$path);
	$unitId = $fields[0];

	if($unitId != 0):
	$units = new WP_Query(array('post_type' => 'locations','p'=> $unitId, 'orderby' => 'title','order' => 'ASC','posts_per_page' => '-1'));

	while($units->have_posts()): $units->the_post();

		$minSite = array(512,517,519,522,524); 
		$address_unit = get_field('address_unit');
		$neighborhood = get_field('neighborhood');
		$city_unit = get_field('city_unit');
		$state_unit = get_field('state_unit');
		$cep_unit = get_field('cep_unit');
		$phone_unit = get_field('phone_unit');

		$endereço_01 = get_field('endereço_01');
		$bairro_01 = get_field('bairro_01');
		$telefone_01 = get_field('telefone_01');
		$cep_01 = get_field('cep_01');

		$endereço_02 = get_field('endereço_02');
		$bairro_02 = get_field('bairro_02');
		$telefone_02 = get_field('telefone_02');
		$cep_02 = get_field('cep_02');
			?>
			<div class="container">
				<div class="col-lg-4 pull-right contact-info">
				<?php
				if (in_array($unitId, $minSite)):
		    		?>
		    			<form action="<?php bloginfo('url'); ?>/hotsite/?id=<?php the_ID();?>" method="post" id="get_unit">
					<?php
				else:
					?>
						<form action="<?php the_permalink(); ?>" method="post" id="get_unit">
					<?php
				endif;
						?>
			            <h2 class="contact-unit"><?php the_title(); ?></h2>
			            <hr>
			            <?php 
			            /*if($unitId == 517):*/
				            ?>
				            <p class="contact-address" style="margin: 10px auto;padding:0;"><?php echo $address_unit; ?> <br> <?php echo $neighborhood; ?>, <?php echo $city_unit; ?> - <?php echo $state_unit; ?> <br>CEP: <?php echo $cep_unit; ?> <?php if(!empty($phone_unit)){?> &nbsp;&nbsp;&nbsp;Tel.: <?php echo $phone_unit; } ?> </p>
				            <?php
				            if(!empty($endereço_01)): 
							?>
				            	<p class="contact-address" style="margin: 10px auto;padding:0;"><?php echo $endereço_01; ?> <br> <?php echo $bairro_01; ?> - CEP: <?php echo $cep_01; ?> <br> <?php if(!empty($telefone_01)){?> &nbsp;&nbsp;&nbsp;Tel.: <?php echo $telefone_01; } ?> </p>
				            <?php 
							endif;
							if(!empty($endereço_02)):
							?>
				            	<p class="contact-address" style="margin: 10px auto;padding:0;"><?php echo $endereço_02; ?> <br> <?php echo $bairro_02; ?> - CEP: <?php echo $cep_02; ?> <br> <?php if(!empty($telefone_02)){?> &nbsp;&nbsp;&nbsp;Tel.: <?php echo $telefone_02; } ?> </p>
				            <?php	
				            endif;
			        		?>
						<input type="hidden" name="unit" value="<?php the_ID(); ?>|<?php the_title(); ?>">
			            <button name="botao" type="submit" class="contact-link" id="link_unit_minisite" data-session="<?php the_ID(); ?>|<?php the_title(); ?>" title="Acessar a Pagina da unidade" alt="Acessar a Pagina da unidade">Acessar a Pagina da unidade</button>
			            <span id="teste"></span>
			        </form>
		        </div>
		    </div>
			<?php
		endwhile;
	wp_reset_postdata();
	endif;
die();
}
?>