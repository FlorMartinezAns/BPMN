Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"RRHH","publishDate":"13/09/2024 12:19:40","pages":[{"id":"39779e55-4d08-4991-8147-181c776f3b37","name":"RRHH","version":"1.0","author":"florencia.martinez","image":"files\\diagrams\\RRHH.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"644e2c36-df66-4384-9bfd-4ab9738c3e01","name":"RRHH","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":1746.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"3d00563b-bcac-4da5-b4c3-2e487d3ef969","name":"COMPARTIR PLACA INFORMATIVA DE INGRESOS","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":242.0,"y":723.0}],"radius":0.0,"height":80.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","consulted":[{"name":"COORDINACIÓN DE ADMINISTRACIÓN DE PERSONAL","value":"e42d8c23-a4db-44d4-abb5-300644e4af24","type":"resource","pageRef":"Resources"},{"name":"COORDINACIÓN DE OPERACIÓN","value":"bf658674-7015-4672-9729-5d834ad16d2b","type":"resource","pageRef":"Resources"},{"name":"RESPONSABLE DE FORMACIÓN","value":"b3fbeada-459d-485d-aac9-1022b5b930a8","type":"resource","pageRef":"Resources"},{"name":"SISTEMAS","value":"17d0f5e7-a23a-456c-bf8d-19c57e115e6a","type":"resource","pageRef":"Resources"}],"informed":[{"name":"RECLUTADOR","value":"6ab285dd-596f-4cc5-a1be-e1e5bd85e630","type":"resource","pageRef":"Resources"},{"name":"COORDINACIÓN DE RRHH","value":"790634ce-2f73-4697-baf9-e039bd692b48","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"72a621d3-b626-465e-ae44-f6984a190bb4","name":"SOLICITAR DOCUMENTACION DE POSTULANTES A ADP","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2250.0,"y":733.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RECLUTADOR","value":"6ab285dd-596f-4cc5-a1be-e1e5bd85e630","type":"resource","pageRef":"Resources"}],"consulted":[{"name":"COORDINACIÓN DE ADMINISTRACIÓN DE PERSONAL","value":"e42d8c23-a4db-44d4-abb5-300644e4af24","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"5aaebc1b-9c01-4346-b805-bb4dd932cea7","name":"Firma Adp","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":728.0,"y":316.0}],"radius":0.0,"height":48.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"COORDINACIÓN DE ADMINISTRACIÓN DE PERSONAL","value":"e42d8c23-a4db-44d4-abb5-300644e4af24","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"c2dbce41-6cdc-4850-83e3-191241cb89bd","name":"Firma RRHH","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":728.0,"y":381.0}],"radius":0.0,"height":48.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"COORDINACIÓN DE RRHH","value":"790634ce-2f73-4697-baf9-e039bd692b48","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"76a35ccc-22da-4177-8610-ab33730be443","name":"PUBLICACION DE VACANTE","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":999.0,"y":375.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RESPONSABLE DE COMUNICACIONES","value":"516ee06d-ea58-4f82-aabc-c51959b06f7d","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"e75359fd-aa88-4618-9170-266e7c201aa4","name":"PRIMER SELECCIÓN DE POSTULANTES","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1133.0,"y":363.0}],"radius":0.0,"height":84.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RECLUTADOR","value":"6ab285dd-596f-4cc5-a1be-e1e5bd85e630","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"c895e3e8-3621-452f-a106-87bbc135c356","name":"ENVIO DE METRICAS Y PEDIDOS DE EXCEPCIONES AL CLIENTE","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1346.0,"y":366.0}],"radius":0.0,"height":77.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RECLUTADOR","value":"6ab285dd-596f-4cc5-a1be-e1e5bd85e630","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"878bfc6a-df66-41f2-8885-44d17bd74a96","name":"SE INFORMA POR COMUNICACIONES INTERNAS","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2870.0,"y":380.0}],"radius":0.0,"height":60.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RESPONSABLE DE COMUNICACIONES","value":"516ee06d-ea58-4f82-aabc-c51959b06f7d","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"d0f720f2-2dc5-4d30-a193-e92b61df93b9","name":"INFORMAR AL CANDIDATO","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1884.0,"y":502.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RECLUTADOR","value":"6ab285dd-596f-4cc5-a1be-e1e5bd85e630","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"66ed1790-80b5-4cba-9c0b-009e6e96b771","name":"Se arma cronograma de aula y OJT","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":3872.0,"y":1078.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"8f7c0c4a-bae0-4b6a-92f8-06d119f7f00d","name":"IDENTIFICAR CAUSA RAÍZ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">La identificaci&oacute;n de la causa ra&iacute;z se har&iacute;a en parte por lo relevado en reuni&oacute;n con el l&iacute;der y por otra parte por la informaci&oacute;n plasmada en el tablero de evaluaci&oacute;n de desempe&ntilde;o. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":480.0,"y":1406.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"cc2d336e-cc26-4f10-bc7d-df106e27daab","name":"PRESENTISMO","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">Tasa de ausentismo y adhesi&oacute;n a los d&iacute;as programados. Clasificaci&oacute;n en tipos de licencias/ausencia.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":712.0,"y":1516.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"d6131fc5-ddfb-417c-9143-b1f60210b957","name":"PROCESO DE SEGUIMIENTO OPERACIONAL","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">Incluye los indicadores de mayor peso en facturaci&oacute;n: Transferencias, NPS, Resoluci&oacute;n, 0y1, SPL30, SPL7, y TMO.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":714.0,"y":1289.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[]},{"id":"7f55c42a-c85e-46f4-8b2a-229e60cd699b","name":"SEGUIMIENTO VENTAS","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":712.0,"y":1406.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":false,"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Proceso","value":"Diagrama 2 - SEGUIMIENTO DE VENTAS","type":"text"}]},{"id":"8baf1532-66b3-4939-8bf5-06d05c89dc4b","name":"RECIBIR TICKET CON SOLICITUD DE COMUNICACIÓN","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">EL ticket est&aacute; estructurado con los siguientes campos a rellenar: &Aacute;rea a la que debe transmitirse el mensaje, fecha y hora en la que debe comunicarse el mensaje, medio por el cual debe comunicarse, texto del mensaje, mail de referente para realizar consultas respecto del mensaje comunicado. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":81.0}],"radius":0.0,"height":60.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"ÁREA SOLICITANTE","value":"bc9f1161-ed59-40a8-800e-f5cec6b9f206","type":"resource","pageRef":"Resources"}],"accountable":[{"name":"RESPONSABLE DE COMUNICACIONES","value":"516ee06d-ea58-4f82-aabc-c51959b06f7d","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"2a8559a1-3c1f-4e7e-83fe-b21ba2715460","name":"GESTIONAR TICKET","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Calibri;font-size:11pt;font-weight:normal;font-style:normal;\">Se deber&aacute; gestionar el pedido de comunicaci&oacute;n siguiendo las especificaciones del &aacute;rea solicitante. Sin embargo, la responsable de comunicaciones debe moderar los mensajes de manera tal que est&eacute;n alineados con los valores de la empresa. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":452.0,"y":81.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"RESPONSABLE DE COMUNICACIONES","value":"516ee06d-ea58-4f82-aabc-c51959b06f7d","type":"resource","pageRef":"Resources"}],"accountable":[{"name":"RESPONSABLE DE COMUNICACIONES","value":"516ee06d-ea58-4f82-aabc-c51959b06f7d","type":"resource","pageRef":"Resources"}],"properties":[]}]}],"subPages":[]}],"texts":{"tableOfContents":"Tabla de Contenidos","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versión","author":"Autor","description":"Descripción","mainPool":"Proceso principal","mainPoolDescription":"Proceso principal Descripción","processDiagrams":"Diagramas de Proceso","processElements":"Elementos del proceso","elements":"Elementos del proceso","defaultElementName":"Elemento","performers":"Ejecutantes","accountable":"Responsable","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Home","search":"Buscar","goToParentProcess":"Ir al proceso padre","calledBy":"Llamado por","attachmentsTooltip":"Ver adjuntos","visitBizagi":"Visite bizagi.com","contains":"Contiene {0} Subprocesos","showAll":"Ver todo","fullScreen":"Pantalla completa","zoomIn":"Acercar","zoomOut":"Alejar","close":"Cerrar","menu":"Menu: ","errorPage":"Error al visualizar la página","process":"Proceso","subProcess":"Subprocesos publicados","contain":"Contiene","checkAttributes":"Ver atributos","checkOverview":"Ver resumen","unavailableResource":"El recurso no esta disponible","localResource":"El recurso puede accederse localmente","performer":"Ejecutante","linktoimage":"Hipervínculo a imagen","presentationAction":"Acciones de presentación","searchGlobal":"Buscar todo","searchLocal":"Buscar en este proceso","searchResults":"No se encontraron resultados","titlePage":"Inicio","emptyElement":"Este elemento aún no se ha documentado","unsupported":"Su navegador no soporta contenido mostrado en esta página. <br> Le recomendamos actualizar su navegador.","details":"Detalles","viewDetails":"Ver detalles","expand":"Expandir","mainPoolProperties":"Propiedades Proceso principal","cannotVisualize":"No es posible visualizar correctamente","resourceNotFound":"No se encontró el recurso solicitado:","applyTheme":"Aplicando el tema","showMore":"Ver mas","showLess":"Ver menos","hideDescription":"Ocultar descripción","showDescription":"Mostrar descripción","presentationActionLink":"Ver acción de presentación","goToLinkThrow":"Ir al evento de destino","goToLinkCatch":"Ir al evento de origen","goToSubProcess":"Ir al subproceso","viewByList":"Lista de procesos","viewByTree":"Jerarquía de procesos","diagramList":"Lista de procesos","folderTree":"Jerarquía de procesos"},"resourcePage":{"id":"Resources","name":"Recursos","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"e42d8c23-a4db-44d4-abb5-300644e4af24","name":"COORDINACIÓN DE ADMINISTRACIÓN DE PERSONAL","rol":"Rol"},{"id":"bf658674-7015-4672-9729-5d834ad16d2b","name":"COORDINACIÓN DE OPERACIÓN","rol":"Rol"},{"id":"b3fbeada-459d-485d-aac9-1022b5b930a8","name":"RESPONSABLE DE FORMACIÓN","rol":"Rol"},{"id":"17d0f5e7-a23a-456c-bf8d-19c57e115e6a","name":"SISTEMAS","rol":"Entidad"},{"id":"6ab285dd-596f-4cc5-a1be-e1e5bd85e630","name":"RECLUTADOR","rol":"Rol"},{"id":"790634ce-2f73-4697-baf9-e039bd692b48","name":"COORDINACIÓN DE RRHH","rol":"Rol"},{"id":"516ee06d-ea58-4f82-aabc-c51959b06f7d","name":"RESPONSABLE DE COMUNICACIONES","rol":"Rol"},{"id":"bc9f1161-ed59-40a8-800e-f5cec6b9f206","name":"ÁREA SOLICITANTE","description":"","rol":"Rol"}]},"searchMap":[{"containerId":"39779e55-4d08-4991-8147-181c776f3b37","containerName":"RRHH","isSubprocess":false,"elements":[{"id":"644e2c36-df66-4384-9bfd-4ab9738c3e01","value":"RRHH"},{"id":"3cce0e09-e6ff-41b2-a7f4-3df0786e27f9","value":"CLIMA Y CULTURA"},{"id":"80734168-70a3-4821-b988-2c8456b77155","value":"RECLUTAMIENTO INTERNO"},{"id":"f1bf1426-63b7-4e97-bfcf-313be8a4dc5c","value":"RECLUTAMIENTO EXTERNO"},{"id":"ba76aebe-b975-4362-a41b-f5d1b76182b8","value":"FORMACIÓN"},{"id":"94b89ca2-c50b-4d62-8226-f8018e613d66","value":"SEGUIMIENTO"},{"id":"b0d7bf36-423f-4fc3-a993-fc32c9c2f377","value":"REQUERIDO DE INGRESOS"},{"id":"683c28f8-93af-4938-8a2f-faf604239371","value":"RECIBIR PLACA DE INGRESOS COMPLETA"},{"id":"6decb8b7-7d25-46b6-b642-f9acb9f4a073","value":"PUBLICAR VACANTES"},{"id":"ebee4437-20f2-4fd7-910b-43ebbe9051dc","value":"RECEPCION DE POSTULACION MEDIANTE FORMULARIO"},{"id":"2168d320-fa7e-425c-9d2d-4d474d2cb904","value":"FILTRADO SEGÚN REQUISITOS"},{"id":"7fc863fb-d4a8-4dde-bc26-3c29636067bf","value":"PRIMER CONTACTO POR WP PARA SONDEAR INTERÉS Y DISPONIBILIDAD"},{"id":"be2b0200-47d0-4ad5-a621-ecb473a86b14","value":"2DO CONTACTO TELEFÓNICO"},{"id":"7dcd2365-bc70-4002-b613-4dfccd419e43","value":"PASA"},{"id":"b555a500-c640-4724-a78f-78aa8a6587cf","value":"ENVIAR MAIL CON INVITACIÓN AL ASSESSMENT"},{"id":"f4d0759b-0f2a-4897-be39-116d82d3e719","value":"SE INFORMA AL CANDIDATO"},{"id":"e922e894-398d-4e70-b12e-bfbfab592d1e","value":"PLANIFICACIÓN DEL ASSESSMENT"},{"id":"2e7420af-23f3-416a-844f-f374eaae27d3","value":"PROCESO DE ASSESSMENT"},{"id":"98abc2ac-6fa7-4bea-a908-6dfd50182850","value":"SE CALIBRA CON AUDITOR"},{"id":"62a90a36-2a70-4d43-9038-7ea87cb774c6","value":"SE RECIBE CONFIRMACIÓN FORMAL DEL AUDITOR"},{"id":"48c107e5-0bdc-439d-8aaa-8c2400dd7c6d","value":"PASA"},{"id":"72a621d3-b626-465e-ae44-f6984a190bb4","value":"SOLICITAR DOCUMENTACION DE POSTULANTES A ADP"},{"id":"74f6c376-cebf-4414-a0b8-595e374f0023","value":""},{"id":"fc5bbd73-ad44-4b26-abdf-ffc42a47ec8a","value":"INFORMAR A POSTULANTES QUE AVANZAN A ENTREVISTA IND. Y TECNICA"},{"id":"7376b807-29e0-4a8d-9688-6a99bad3d142","value":""},{"id":"faf739af-731f-49be-bb2f-ab71dd869f76","value":"ENTREVISTA INDIVIDUAL"},{"id":"e23245bb-e854-4c79-8821-d325ca76ec4f","value":"ENTREVISTA TÉCNICA A CARGO DE FORMACIÓN"},{"id":"163ca86e-d0df-4a68-ad61-4134978e7977","value":""},{"id":"8881c293-7bd3-44c1-bd76-2f65ed4ad6a7","value":"CALIBRAR QUIENES AVANZAN"},{"id":"f8ed2663-f192-421d-8966-7977e2f923af","value":"PASA"},{"id":"68ee0aa9-c090-4265-8d48-44d241767fea","value":"SOLICITAR REFERENCIAS LABORALES"},{"id":"51b0393d-f1cc-4ecc-b270-87844af029d7","value":"CUMPLE"},{"id":"60b66d99-8329-43de-8baa-3e88982a2c41","value":""},{"id":"7f8ac723-f36b-46da-b653-1952d60dc4fd","value":"SE COMUNICA AL CANDIDATO"},{"id":"491a76f6-6640-4e3f-bc71-842c1125a697","value":"SE COMUNICA LISTA A ADP - SISTEMAS  - PPP - GTR - OPERACION"},{"id":"6db2789e-182c-4187-8908-d581ff392510","value":"SE VERIFICA SOLICITUD DE EMPLEO"},{"id":"1fd5069d-ee17-4b03-aa7c-d14bf030c952","value":"SE CREA GRUPO DE WP CON LOS NUEVOS INGRESOS + FORMACION"},{"id":"e076ccce-55a4-4391-9d57-5d6e6d6dc6c7","value":""},{"id":"812818df-0afe-4484-8132-de0f5ea2ef67","value":"Solicitar que se complete formulario"},{"id":"94ce09d5-194f-459a-a52a-429ce631e6b6","value":""},{"id":"5aaebc1b-9c01-4346-b805-bb4dd932cea7","value":"Firma Adp"},{"id":"c2dbce41-6cdc-4850-83e3-191241cb89bd","value":"Firma RRHH"},{"id":"86f5dc03-4774-4cad-aef5-1227c3ff2711","value":"Firma área solicitante"},{"id":"33f5a80c-1940-40b9-bdb0-cf8014777107","value":""},{"id":"76a35ccc-22da-4177-8610-ab33730be443","value":"PUBLICACION DE VACANTE"},{"id":"e75359fd-aa88-4618-9170-266e7c201aa4","value":"PRIMER SELECCIÓN DE POSTULANTES"},{"id":"c895e3e8-3621-452f-a106-87bbc135c356","value":"ENVIO DE METRICAS Y PEDIDOS DE EXCEPCIONES AL CLIENTE"},{"id":"a3a5da2d-0b81-48b0-ad1d-8c388178216f","value":"SE RECIBE OK O NO OK DEL CLIENTE"},{"id":"07c9a8fb-9c68-4a99-a4c6-46ab43ddd3bd","value":"1ER CONTACTO CON POSTULANTE"},{"id":"5e266ac6-4e1b-47ce-bc33-e46fce1d9d31","value":"CARGAR CRONOGRAMA DE ENTREVISTAS EN SHAREPOINT"},{"id":"99da5db0-fc81-4dfa-8c59-39c6fc99db23","value":"ENVIO DE MAIL A CANDIDATOS"},{"id":"6dfae430-9eae-4045-a66a-229814b99290","value":"ENTREVISTA AUDITADA POR GESNEXT"},{"id":"a1f0d737-f568-4fd7-9e2c-0728fe94123e","value":"PASA"},{"id":"d0f720f2-2dc5-4d30-a193-e92b61df93b9","value":"INFORMAR AL CANDIDATO"},{"id":"7c70b590-9558-4740-8d23-6493b8719460","value":"PASA"},{"id":"1b997b8c-21a5-4bbe-8113-32b64a76f960","value":"ENTREVISTA CON EL AREA SOLICITANTE"},{"id":"99d71483-8fe9-461a-8f0e-f65bcabf042c","value":"PASA"},{"id":"48d3aeae-20e0-4cd3-81a4-3e4e170637e7","value":"SE DA AVISO FORMAL AL SELECCIONADO"},{"id":"878bfc6a-df66-41f2-8885-44d17bd74a96","value":"SE INFORMA POR COMUNICACIONES INTERNAS"},{"id":"8baf1532-66b3-4939-8bf5-06d05c89dc4b","value":"RECIBIR TICKET CON SOLICITUD DE COMUNICACIÓN"},{"id":"84cc2d07-7ee8-47b3-bb6b-76bbae8dfd10","value":"CERRAR TICKET"},{"id":"f1b61ac7-0473-4cd4-b4bb-ecf4cfa93323","value":"Elaboración de encuesta"},{"id":"512e9800-5e7c-4616-81fd-e941f22870ae","value":"Elaboración de códigos"},{"id":"646f1936-7a63-4dde-a795-b465f6c65a4a","value":"envío de mail con códigos para cada equipo - a cada referente de área"},{"id":"ce44f6b6-c863-43e6-9a7b-731c03609e93","value":"una semana"},{"id":"c3e74dd2-0ee5-4402-8a3a-dd78f791c4f9","value":"cierre de participación en encuesta"},{"id":"995b0e36-212c-494d-a1ee-1157d444cc3d","value":"Recepción de dashboard para análisis"},{"id":"03d788fb-dbf5-4250-901d-7a499b925538","value":"Realización de informe general de encuesta para compartir a todas las áreas"},{"id":"30fdc5df-3634-4427-a6ab-d4e6af9e4ced","value":"Programar los focus group con equipos"},{"id":"de1ca942-3c1a-4dd0-a362-bcac81bf5c87","value":"Proceso de focus group"},{"id":"bdb51b5f-ce1a-4170-b3f3-054eb542d913","value":"informe de planes de acción de cada área para mejorar puntos débiles"},{"id":"75119cf6-a811-4c89-a4fe-6e5066e2b8b1","value":"Se envía mensaje por el grupo de WP con invitación a la inducción"},{"id":"8ebfa95f-c8dd-4f87-b988-8557b62f8536","value":"Preparación de presentación"},{"id":"261a48a0-323d-4e23-bb01-595b44b11eed","value":"Proceso de inducción y firma de actas de conformidad"},{"id":"ef71dac8-8548-4dfc-ae63-ab9023486804","value":"Enviar mail con la presentación de inducción a los ingresantes"},{"id":"76e82228-b0b4-4b77-bd37-be2a3c4a9eb4","value":"Es un problema para RRHH?"},{"id":"84860aab-82e8-4362-83b4-103e5f0c0df2","value":"Se deriva al área correspondiente"},{"id":"fe36d251-883b-46ef-8808-6b9fc8510af8","value":"Se toma el reclamo"},{"id":"41cbfad4-f82f-4538-9aaf-8dd90b5b9f5c","value":"Se da resolución al reclamo"},{"id":"7b30bc8e-e0dc-450a-81ed-341a8e1bde85","value":"Repite OJT"},{"id":"df6ccbd3-9689-40a4-ad19-4c71d3b67ecc","value":""},{"id":"13affdc4-d399-44b6-b242-7cfbc7a99c6c","value":"Pasa?"},{"id":"cf162160-62c0-4df5-ab19-d4b419a7d890","value":"pasa?"},{"id":"96aa5ea0-66bb-4685-8cac-10b4a0d0bf91","value":"Pasa OJT?"},{"id":"7ecbfb66-fd36-4cac-8244-a47fd19df419","value":"Aprueba Evaluación sidepro?"},{"id":"b7d7f812-499e-408e-b746-b6dccca6be0c","value":"Se carga en la base multimétrico"},{"id":"c7de03bd-ab76-4c17-9c79-37147841f2cd","value":"se informan resultados a todas las áreas"},{"id":"9a2af5e6-093f-460d-bda4-1b6e88b7fc5e","value":"pasa a línea"},{"id":"248c9a58-9565-4544-938b-1fb845db1958","value":"Pasa con seguimiento"},{"id":"9ad5611d-1ec4-4636-8486-3b603a0d78fe","value":"Pasa directo"},{"id":"6f7e469a-c0c6-4e87-a22d-d924b2b58356","value":"Pasa a OJT"},{"id":"20c126d9-bc9a-44fe-a30f-58dd2d4783a0","value":"Se informa al candidato"},{"id":"d1e25e18-ed15-4ee9-a754-a2f93827842c","value":"Se da inicio al aula"},{"id":"67df9552-ca8e-4cd6-9adc-7e5c5c1d306e","value":"Se carga en base Planner y matriz"},{"id":"2fe3cc50-d5b3-49d5-a598-34bc9850b4fc","value":"Se espera la aprobación y se continúa con el proceso"},{"id":"a5c5bfde-92e8-452a-9890-e473547c803f","value":"se envía toda el cronograma completo por RFX"},{"id":"18326d2f-67bd-420e-a649-916ea1aa3e7d","value":"Recepción de lista de ingresantes"},{"id":"9a5dcfa7-223a-4fa2-876a-828443252509","value":""},{"id":"adaf3db8-dd65-45ea-818c-329c060d0f95","value":"Se envia encuesta de satisfacción con la capa recibida"},{"id":"0fcd2807-fcee-4a03-8c5a-ef0fd6c5c578","value":"Se entrega certificado correspondiente"},{"id":"e374fee5-674e-4d0a-b865-f2d183946b58","value":"Se evaluan oportunidades de mejora"},{"id":"3d827e79-314b-490a-af9d-6715acebced2","value":"Se inicia Capa"},{"id":"f6f4d1a6-cac8-4a85-9903-2d9c2750221b","value":"Se carga base interna de planner y matriz"},{"id":"138cdfd1-c0cf-4b39-a483-1d24ae3477ea","value":"Se envía invitación formal via mail y se refuerza por comunicacion interna"},{"id":"9dcb3e7d-88d1-4743-acd7-69fddf44f6aa","value":"Se arma cronograma de capa"},{"id":"cf2e9742-7d6a-4d43-9b34-be336be89b50","value":"FIN"},{"id":"bb1b115e-9ee2-452b-aecf-7ba33c469b1a","value":"FIN DE RECLUTAMIENTO Y SELECCIÓN"},{"id":"3b5cffa0-a916-47c8-bb38-50996a2c2515","value":"FIN"},{"id":"b438152e-006f-4b84-99bf-1760c52fe7c8","value":""},{"id":"8452bb74-a8f6-4e3c-9136-40bab1a2c613","value":""},{"id":"ff34d5aa-1e0a-43f0-ae41-0f4f952261b0","value":""},{"id":"0e7223d6-78c1-4a64-be9f-ddf71e2d9493","value":""},{"id":"51113ede-4ded-4102-8d18-4546d3f4c1c9","value":"FIN DE OJT"},{"id":"66ed1790-80b5-4cba-9c0b-009e6e96b771","value":"Se arma cronograma de aula y OJT"},{"id":"453480a3-e7c1-4747-97ef-f2d19710af66","value":"encuesta de clima"},{"id":"cc3f9d7b-639c-48bf-9a3e-d52d7ded9969","value":"Relevamiento necesidad de personal"},{"id":"be34673c-e4bb-4416-9aa5-f7cc468839c6","value":"recepción de placa informativa con fecha de inducción"},{"id":"91d2ee18-d080-4115-bc87-996d05ab6720","value":"Recepción de reclamo via WP"},{"id":"7c36f7fa-9f78-487f-a3f2-87e92fd28256","value":"ingresos de aulas"},{"id":"a3a335b6-b5ce-418c-8e69-9f098376c4d6","value":"PROCEDER A INDUCCIÓN"},{"id":"9b87fc52-72c2-4924-b1a7-0437d116636a","value":"PROCEDER A PROCESO DE AULA"},{"id":"39ad1a1f-5fbd-4784-8254-b8f6832aadf8","value":"FIN DEL PROCESO"},{"id":"97bd97ee-3075-4a16-84b6-84623039fd34","value":"DETECCIÓN DE PERFIL PARA SEGUIMIENTO"},{"id":"b87440c9-1d73-4b8d-87d3-823c1c18b2d8","value":"La detección se realizará a través del tablero de EVALUACIÓN DE DESEMPEÑO"},{"id":"8f7c0c4a-bae0-4b6a-92f8-06d119f7f00d","value":"IDENTIFICAR CAUSA RAÍZ"},{"id":"a2bbbcf9-f0e5-4b65-9026-268e8c824894","value":""},{"id":"cc2d336e-cc26-4f10-bc7d-df106e27daab","value":"PRESENTISMO"},{"id":"3673f437-d499-4435-839e-121acc8e5a62","value":"PROCESOS ADMINISTRATIVOS"},{"id":"d6131fc5-ddfb-417c-9143-b1f60210b957","value":"PROCESO DE SEGUIMIENTO OPERACIONAL"},{"id":"7f55c42a-c85e-46f4-8b2a-229e60cd699b","value":"SEGUIMIENTO VENTAS"},{"id":"c53d8d07-b556-48fb-858b-77b3cc6ca3a9","value":"Relevamiento de necesidad de capacitación o solicitud de otra área"},{"id":"4f17981d-f33c-46c8-ad83-827f1ccb96f7","value":"INICIA PROCESO CON TICKET"},{"id":"2a8559a1-3c1f-4e7e-83fe-b21ba2715460","value":"GESTIONAR TICKET"},{"id":"d70ec6e2-8624-4a0e-b51b-764dacacfc11","value":"ENVIAR COMUNICACIÓN"},{"id":"3488b8aa-174d-4f27-aa5a-943d01fe9b3f"},{"id":"3d00563b-bcac-4da5-b4c3-2e487d3ef969","value":"COMPARTIR PLACA INFORMATIVA DE INGRESOS"},{"id":"432a0e15-2924-4679-bfb9-db0507b97b38","value":"Recibir correo con necesidad de personal"},{"id":"db8244c5-c16a-4ac1-8a46-befbc6eca49e"},{"id":"3856fd7d-21a2-4234-8965-a7fee8edd429"},{"id":"ed76de67-75d0-4784-b4e8-b3c3e502c04e","value":"SE ESTÁ TRABAJANDO EN EL DESARROLLO DE TICKET PARA INICIAR ESTE PROCESO"},{"id":"aee40e2f-8aec-42ea-808e-3544fc684bcb"},{"id":"16065198-9561-4265-acae-90e51f434d47","value":"ESTE PROCESO ESTÁ SIENDO DEFINIDO POR SER UN NUEVO ROL"},{"id":"ac5f5e40-7b61-49b0-a681-a8df9b704e84","value":"Debido a las demoras manifestadas por el reclutador, se desarrolló ticket para este proceso"}]}]}