$(document).ready(function () {

	// Feeds comunistes.cat

	$('#feed-bloc').rssfeed('http://bloc.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-imatges').rssfeed('http://imatges.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-videos').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-som').rssfeed('http://som.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-videos-last').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 3
	});
	
	// Feeds filtrats del bloc

	$('#feed-bloc-campanyes').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Campanyes',{
		snippet: false,
		limit: 1
	});	
	$('#feed-bloc-comunicats').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Comunicats',{
		snippet: false,
		limit: 1
	});	
	$('#feed-bloc-documents').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Documents',{
		snippet: false,
		limit: 1
	});	
	$('#feed-bloc-actualitat').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Actualitat',{
		snippet: false,
		limit: 1
	});
	$('#feed-bloc-accions').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Accions',{
		snippet: false,
		limit: 1
	});
	
	// Temes
	
	$('#feed-treballdigne').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23TreballDigne',{
		snippet: false,
		limit: 5
	});	
	$('#feed-rendagarantida').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23RendaGarantida',{
		snippet: false,
		limit: 5
	});	
	$('#feed-salutpublica').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23SalutPública',{
		snippet: false,
		limit: 5
	});	
	$('#feed-dretalhabitatge').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23DretAlHabitatge',{
		snippet: false,
		limit: 5
	});	
	$('#feed-escolapublica').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23EscolaPública',{
		snippet: false,
		limit: 5
	});	
	$('#feed-universitatpublica').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23UniversitatPública',{
		snippet: false,
		limit: 5
	});	
	$('#feed-lliureinformacio').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23LliureInformació',{
		snippet: false,
		limit: 5
	});	
	$('#feed-tecnologiesobertes').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23TecnologiesObertes',{
		snippet: false,
		limit: 5
	});	
	$('#feed-feminisme').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23Feminisme',{
		snippet: false,
		limit: 5
	});	
	$('#feed-igualtatdedrets').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23IgualtatDeDrets',{
		snippet: false,
		limit: 5
	});	
	$('#feed-dretsdelainfancia').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23DretsDeLaInfància',{
		snippet: false,
		limit: 5
	});	
	$('#feed-racismemaimes').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23RacismeMaiMés',{
		snippet: false,
		limit: 5
	});	
	$('#feed-rupturademocratica').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23RupturaDemocràtica',{
		snippet: false,
		limit: 5
	});	
	$('#feed-memoriahistorica').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23MemòriaHistòrica',{
		snippet: false,
		limit: 5
	});	
	$('#feed-mediambient').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23MediAmbient',{
		snippet: false,
		limit: 5
	});	
	$('#feed-culturapopular').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23CulturaPopular',{
		snippet: false,
		limit: 5
	});	
	$('#feed-pau').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23Pau',{
		snippet: false,
		limit: 5
	});	
	$('#feed-solidaritat').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23Solidaritat',{
		snippet: false,
		limit: 5
	});	
	$('#feed-republicacatalana').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23RepúblicaCatalana',{
		snippet: false,
		limit: 5
	});	
	$('#feed-classetreballadora').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/%23ClasseTreballadora',{
		snippet: false,
		limit: 5
	});	
	
	// Feeds filtrats de videos

	$('#feed-videos-last-one').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-videos-last-two').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 2
	});	
	$('#feed-videos-last-five').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 5
	});	
	$('#feed-videos-parlament').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Parlament',{
		snippet: true,
		limit: 1
	});
	$('#feed-videos-mobilitzacions').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Mobilitzacions',{
		snippet: true,
		limit: 1
	});
	$('#feed-videos-campanyes').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Campanyes',{
		snippet: true,
		limit: 1
	});
	$('#feed-videos-cinema').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Cinema',{
		snippet: true,
		limit: 1
	});
	
	// Feeds organitzacions
	
	$('#feed-euia').rssfeed('http://euia.cat/apartado_noticias_rss_cat.php?ap=1',{
		snippet: true,
		limit: 1
	});
	$('#feed-fpereardiaca').rssfeed('http://noticies.fpereardiaca.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-el').rssfeed('http://www.european-left.org/english/home/news_archive/newsfeed.xml',{
		snippet: true,
		limit: 1
	});
	$('#feed-ccoo').rssfeed('http://www.ccoo.cat/aspnet/rss.aspx',{
		snippet: true,
		limit: 1
	});
	$('#feed-cgt').rssfeed('http://www.cgtcatalunya.cat/spip.php?page=backend',{
		snippet: true,
		limit: 1
	});	
	$('#feed-cobas').rssfeed('http://www.cobas.es/index.php?format=feed&type=rss&lang=en',{
		snippet: true,
		limit: 1
	});	
	$('#feed-dempeus').rssfeed('http://dempeusperlasalut.wordpress.com/feed/',{
		snippet: true,
		limit: 1
	});
	$('#feed-iaioflautas').rssfeed('http://www.iaioflautas.org/feed/',{
		snippet: true,
		limit: 1
	});
	$('#feed-falternativa').rssfeed('http://www.fundacioalternativa.cat/?feed=rss2',{
		snippet: true,
		limit: 1
	});
	$('#feed-pah').rssfeed('http://pahbarcelona.org/feed/',{
		snippet: true,
		limit: 1
	});
	
	// Feeds Blocs
	
	$('#feed-amcastells').rssfeed('http://puntsdevista.wordpress.com/feed/rss/',{
		snippet: true,
		limit: 1
	});
	$('#feed-mdelgado').rssfeed('http://manueldelgadoruiz.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-jjnuet').rssfeed('http://feeds.feedburner.com/ElBlocDeJoanJosepNuet',{
		snippet: true,
		limit: 1
	});
	$('#feed-jmena').rssfeed('http://joanmena.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-tsalado').rssfeed('http://blocpolitikon.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-aitalo').rssfeed('http://antoniitalo.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-mnavarro').rssfeed('http://lescosesdenjomi.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-amoreno').rssfeed('http://unbellfantasma.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-asalmeron').rssfeed('http://alfonso-lhquetuvols.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-rvalls').rssfeed('http://www.albasud.org/rss.php?lan=es',{
		snippet: true,
		limit: 1
	});	
	$('#feed-sfr').rssfeed('http://seguintfilroig.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	
});