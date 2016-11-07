<!DOCTYPE html>
<html>
    <head>
    	<meta http-equiv="refresh" content="100">
         <link href="{!! asset('assets/css/estilo.css') !!}" media="all" rel="stylesheet" type="text/css" />
    	<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="assets/js/feed.js"></script>
        <script type="text/javascript" src="assets/js/relogio.js"></script>
        <script type="text/javascript">
            jQuery(window).load(function(){
                Relogio();
            });
        </script>
        <title>Comerc Energia</title>
        
    </head>
    <body>
        <div class="cabecalho">
            <div id="cont_ca12aaf67a361804229297cf9ac4e440"><script type="text/javascript" async src="https://www.tempo.pt/wid_loader/ca12aaf67a361804229297cf9ac4e440"></script></div>
        </div>
        <div class="noticias">
            {{$projeto}}
        </div>
        <div class="rodape">
            <div id="hora"></div>
        </div>
    </body>
</html>