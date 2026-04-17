/**
 * ============================================
 * CATEGORIES CAROUSEL CONTROLLER
 * ============================================
 * Gestiona los carruseles de productos por categoría
 */

// (1) Aquí va el objeto productCategories COMPLETO, con todas las categorías y productos que aparecen en productos_categorizados.md, asegurando que 'Otros' esté presente.
// (2) Las funciones como generateCategoriesHTML() deben recorrer todas las llaves de productCategories (ordenadas, si deseas), y renderizar cada una como una sección de carrusel, tal como hacen con categoriesToAdd, sin hardcodear una lista. Si prefieres mantener un orden específico comunícamelo.
const productCategories = {
    'Aceites y Untables': [
        { image: 'aceite_girasol_unidos_x3000ml.png', name: 'Aceite de Girasol', description: 'Unidos x3000ml' },
        { image: 'margarina_edicion_especial_x1000gr.png', name: 'Margarina Edición Especial', description: 'Unidos x1000gr' },
        { image: 'margarina_en_barra_unidos_x125gr_cx80.png', name: 'Margarina en Barra', description: 'Unidos x125gr' },
        { image: 'margarina_unidos_x1000g.png', name: 'Margarina', description: 'Unidos x1000g' },
        { image: 'margarina_unidos_x250gr.png', name: 'Margarina', description: 'Unidos x250gr' },
        { image: 'mayonesa_unidos_x380gr.png', name: 'Mayonesa', description: 'Unidos x380gr' },
        { image: 'mayonesa_unidos_x200gr.png', name: 'Mayonesa', description: 'Unidos x200gr' },
        { image: 'aceite_soya_900ml.png', name: 'Aceite de Soya', description: 'Unidos x900ml' },
        { image: 'aceite_soya_500ml.png', name: 'Aceite de Soya', description: 'Unidos x500ml' },
        { image: 'aceite_soya_250ml.png', name: 'Aceite de Soya', description: 'Unidos x250ml' },
        { image: 'aceite_soya_2000ml.png', name: 'Aceite de Soya', description: 'Unidos x2000ml' },
        { image: 'aceite_soya_1000ml.png', name: 'Aceite de Soya', description: 'Unidos x1000ml' },
        { image: 'aceite_oliva_500.png', name: 'Aceite de Oliva', description: 'Unidos x500ml' },
        { image: 'aceite_oliva_1000.png', name: 'Aceite de Oliva', description: 'Unidos x1000ml' },
        { image: 'aceite_soya_unidos_x3000ml_cx6.png', name: 'Aceite de Soya', description: 'Unidos x3000ml' },
        { image: 'salsa_de_tomate_unidos_x200gr_cx24.png', name: 'Salsa de Tomate', description: 'Unidos x200gr' },
        { image: 'salsa_de_tomate_unidos_400.png', name: 'Salsa de Tomate', description: 'Unidos x400gr' }
    ],
    'Aseo personal': [
        { image: 'toallas_humedas_antibacterial_max_amarillo_dampy_x120und_cx15.jpg', name: 'Toallas Húmedas Antibacteriales', description: 'Dampy x120und' },
        { image: 'jabon_corporal_amatic_frutal_300ml.png', name: 'Jabón Corporal Amatic', description: 'Frutal x300ml' },
        { image: 'jabon_liquido_manos_frutos_rojos_unidos_2000.png', name: 'Jabón Líquido para Manos', description: 'Frutos rojos x2000ml' },
        { image: 'jabon_liquido_frutos_rojos_x2000.png', name: 'Jabón Líquido', description: 'Frutos rojos x2000ml' },
        { image: 'jabon_liquido_frutos_rojos_x1000.png', name: 'Jabón Líquido', description: 'Frutos rojos x1000ml' },
        { image: 'jabon_corporal_amatic_frutal_750ml.png', name: 'Jabón Corporal Amatic', description: 'Frutal x750ml' },
        { image: 'copitos_algodon_unidos.png', name: 'Copitos de Algodón', description: 'Unidos' },
        { image: 'jabon_barra_azul_unidos.png', name: 'Jabón de Barra', description: '(Líquido Azul x960ml)' },
        { image: 'javon_liquido_avena_unidos_x1000.png', name: 'Jabón Líquido de Avena', description: 'Unidos x1000ml' }
    ],
    'Bebidas': [
        { image: 'cafe_unidos_x500g.png', name: 'Café', description: 'Unidos x500g' },
        { image: 'cafe_liofilizado_unidos_x85g.png', name: 'Café Liofilizado', description: 'Unidos x85g' },
        { image: 'agua_pura_unidos_x1000.png', name: 'Agua Pura', description: 'Unidos x1000ml' },
        { image: 'agua_pura_unidos_600.png', name: 'Agua Pura', description: 'Unidos x600ml' }
    ],
    'Condimentos y especias': [
        { image: 'comino_entero_unidos_x_15_gr.png', name: 'Comino Entero', description: 'Unidos x15gr' },
        { image: 'color_unidos_x60g.png', name: 'Color', description: 'Unidos x60g' },
        { image: 'color_unidos_x20g.png', name: 'Color', description: 'Unidos x20g' },
        { image: 'color_unidos_x100g.png', name: 'Color', description: 'Unidos x100g' },
        { image: 'color_curcuma_unidos_x20g.png', name: 'Color Cúrcuma', description: 'Unidos x20g' },
        { image: 'canela_molida_unidos_x10g.png', name: 'Canela Molida', description: 'Unidos x10g' },
        { image: 'canela_extralarga_x30g.png', name: 'Canela Extralarga', description: 'Unidos x30g' },
        { image: 'mani_salado_unidos_x50gr.png', name: 'Maní Salado', description: 'Unidos x50gr' },
        { image: 'paprika_molida_unidos_x20gr_px12.png', name: 'Paprika Molida', description: 'Unidos x20gr' },
        { image: 'pimienta_molida_unidos_x_60gr.png', name: 'Pimienta Molida', description: 'Unidos x60gr' },
        { image: 'laurel_en_hojas_unidos_x_8gr.png', name: 'Laurel en Hojas', description: 'Unidos x8gr' },
        { image: 'tomillo_molido_unidos_x_15gr.png', name: 'Tomillo Molido', description: 'Unidos x15gr' },
        { image: 'adobo_parrilla__unidos_x_60gr.png', name: 'Adobo para Parrilla', description: 'Unidos x60gr' },
        { image: 'sal_unidos_x500g.png', name: 'Sal', description: 'Unidos x500g' },
        { image: 'sal_unidos_x1000g.png', name: 'Sal', description: 'Unidos x1000g' }
    ],
    'Conservas y enlatados': [
        { image: 'duraznos_en_almibar_la_perla.png', name: 'Duraznos en Almíbar', description: 'La Perla' },
        { image: 'sardina_unidos_x155g.png', name: 'Sardina', description: 'Unidos x155g' },
        { image: 'atun_en_agua_unidos_x170gr_cx48.png', name: 'Atún en Agua', description: 'Unidos x170gr' },
        { image: 'atun_en_aceite_girasol_tripack_unidos_x240gr_cx20.png', name: 'Atún en Aceite de Girasol', description: 'Tripack x240gr' },
        { image: 'lomitos_de_atun_en_aceite_de_girasol_unidos_x160g.png', name: 'Lomitos de Atún', description: 'En aceite de girasol x160g' }
    ],
    'Dulces y postres': [
        { image: 'galleta_salada_unidos_x460gr_cx24.png', name: 'Galleta Salada', description: 'Unidos x460gr' },
        { image: 'galletas_doradas_unidos_3_tacos.png', name: 'Galletas Doradas', description: '3 tacos Unidos' },
        { image: 'galletas_doradas_unidos_x270.png', name: 'Galletas Doradas', description: 'Unidos x270g' },
        { image: 'cucas_unidos.png', name: 'Cucas', description: 'Unidos' },
        { image: 'bocadillo_azucarado_unidos_x350g.png', name: 'Bocadillo Azucarado', description: 'Unidos x350g' },
        { image: 'bocadillo_veleno_unidos_24.png', name: 'Bocadillo Veleño', description: 'Unidos x24und' },
        { image: 'bocadillo_veleno_x650gr.png', name: 'Bocadillo Veleño', description: 'Unidos x650gr' },
        { image: 'galletas_de_navidad_caseritas_x130g_(1).png', name: 'Galletas de Navidad', description: 'Caseritas x130g' },
        { image: 'bocadillo_unidos_24.png', name: 'Bocadillo', description: 'Unidos x24und' },
        { image: 'natilla_tradicional_unidos_x200g_(2).png', name: 'Natilla Tradicional', description: 'Unidos x200g' },
        { image: 'natilla_de_maracuya_unidos_x200g_(3).png', name: 'Natilla de Maracuyá', description: 'Unidos x200g' },
        { image: 'bocadillo_veleno_unidos_16.png', name: 'Bocadillo Veleño', description: 'Unidos x16und' },
        { image: 'bocadillo_veleno_unidos_12.png', name: 'Bocadillo Veleño', description: 'Unidos x12und' },
        { image: 'arequipe_unidos_200.png', name: 'Arequipe', description: 'Unidos x200g' }
    ],
    'Frutas y frutos secos': [
        { image: 'uva_pasas_unidos_x200.png', name: 'Uvas Pasas', description: 'Unidos x200g' },
        { image: 'arándanos_deshidratados_unidos_x_100.png', name: 'Arándanos Deshidratados', description: 'Unidos x100g' },
        { image: 'almendra_laminada_unidos_x_100.png', name: 'Almendra Laminada', description: 'Unidos x100g' },
        { image: 'mani_tostado_unidos_x50g.png', name: 'Maní Tostado', description: 'Unidos x50g' },
        { image: 'mani_con_uvas_pasas_2_x_50gr.png', name: 'Maní con Uvas Pasas', description: 'Unidos x50gr' },
        { image: 'mani_con_ajonjoli_unidos_x50g.png', name: 'Maní con Ajonjolí', description: 'Unidos x50g' },
        { image: 'coco_deshidratado_unidos_x_200gr_(1).png', name: 'Coco Deshidratado', description: 'Unidos x200gr' },
        { image: 'mani_dulce_unidos_x50gr.png', name: 'Maní Dulce', description: 'Unidos x50gr' }
    ],
    'Granos y cereales': [
        { image: 'arroz_unidos_x500gr.png', name: 'Arroz', description: 'Unidos x500gr' },
        { image: 'arroz_unidos_5000.png', name: 'Arroz', description: 'Unidos x5000gr' },
        { image: 'quinua_unidos_x_100_.png', name: 'Quinua', description: 'Unidos x100g' },
        { image: 'avenas.png', name: 'Avena', description: 'Unidos' },
        { image: 'hojuelas_de_maiz_naturales_unidos__x_200_(1).png', name: 'Hojuelas de Maíz Naturales', description: 'Unidos x200g' },
        { image: 'avena_instantanea_fresa_unidos_x200gr_cx36.png', name: 'Avena Instantánea Fresa', description: 'Unidos x200gr' },
        { image: 'linaza_unidos_x_100_.png', name: 'Linaza', description: 'Unidos x100g' },
        { image: 'maiz_comun_unidos_3000.png', name: 'Maíz Común', description: 'Unidos x3000g' },
        { image: 'avena_instantanea_vainilla_unidos_x200gr_cx36.png', name: 'Avena Instantánea Vainilla', description: 'Unidos x200gr' },
        { image: 'avena_hojuelas_unidos_x250gr_px48.png', name: 'Avena en Hojuelas', description: 'Unidos x250gr' },
        { image: 'cereal_hojuelas_azucardas_x_500gr.png', name: 'Cereal Hojuelas Azucaradas', description: 'Unidos x500gr' },
        { image: 'cereal_granola_unidos_x300.png', name: 'Cereal Granola', description: 'Unidos x300g' },
        { image: 'cereal_chobolitas_unidos_x200gr_cx24.png', name: 'Cereal Chobolitas', description: 'Unidos x200gr' },
        { image: 'cereal_aros_frutales_500.png', name: 'Cereal Aros Frutales', description: 'Unidos x500g' },
        { image: 'cereal_arroz_achocolatado_unidos_x_200_gr_(1).png', name: 'Cereal Arroz Achocolatado', description: 'Unidos x200gr' },
        { image: 'cereal_lonchera_unidos.png', name: 'Cereal Lonchera', description: 'Unidos' },
        { image: 'cereal_lonchera_x_6_unidos.png', name: 'Cereal Lonchera', description: 'Unidos x6und' }
    ],
    'Limpieza del hogar': [
        { image: 'limpiapisos_unidos_brisa_marina_2000.png', name: 'Limpiapisos Brisa Marina', description: 'Unidos x2000ml' },
        { image: 'limpiapisos_floral_unidos_x2000.png', name: 'Limpiapisos Floral', description: 'Unidos x2000ml' },
        { image: 'limpiapisos_unidos_vainilla_x1000.png', name: 'Limpiapisos Vainilla', description: 'Unidos x1000ml' },
        { image: 'limpiapisos_desinfectante_lavanda_unidos_x1000ml.png', name: 'Limpiapisos Desinfectante Lavanda', description: 'Unidos x1000ml' },
        { image: 'bolsa_papelera_blanca_unidos_43x45cm_10_unds_cx40.png', name: 'Bolsa Papelera Blanca', description: '43x45cm x10und' },
        { image: 'limpiapisos_citronela_unidos_x1000.png', name: 'Limpiapisos Citronela', description: 'Unidos x1000ml' },
        { image: 'detergente_ropa_oscura.png', name: 'Detergente para Ropa Oscura', description: 'Unidos' },
        { image: 'limpiapisos_canela_unidos_2_x1000.png', name: 'Limpiapisos Canela', description: 'Unidos x1000ml' },
        { image: 'limpiapisos_unidos_canela_2000.png', name: 'Limpiapisos Canela', description: 'Unidos x2000ml' },
        { image: 'limpiapisos_unidos_floral_1000.png', name: 'Limpiapisos Floral', description: 'Unidos x1000ml' },
        { image: 'detergente_unidos_2800.png', name: 'Detergente', description: 'Unidos x2800g' },
        { image: 'bolsa_basura_unidos_industrial.png', name: 'Bolsa de Basura Industrial', description: 'Unidos' },
        { image: 'blanqueador_desinfectante_unidos_x2000ml.png', name: 'Blanqueador Desinfectante', description: 'Unidos x2000ml' },
        { image: 'blanqueador_floral_x3800ml.png', name: 'Blanqueador Floral', description: 'Unidos x3800ml' },
        { image: 'blanqueador_limon_unidos_2000.png', name: 'Blanqueador Limón', description: 'Unidos x2000ml' },
        { image: 'blanqueador_ropa_color_unidos_x1000.png', name: 'Blanqueador para Ropa de Color', description: 'Unidos x1000ml' },
        { image: 'blanqueador_ropa_color_unidos_x2000ml.png', name: 'Blanqueador para Ropa de Color', description: 'Unidos x2000ml' },
        { image: 'quitamanchas_unidos.png', name: 'Quitamanchas', description: 'Unidos' },
        { image: 'bolsas_basura_negra_50_x_65_unidos_6_unds.png', name: 'Bolsas de Basura Negra', description: '50x65cm x6und' },
        { image: 'limpiapisos_brisa_marina_unidos_x2000.png', name: 'Limpiapisos Brisa Marina', description: 'Unidos x2000ml' },
        { image: 'bolsas_para_basura_blancas_papelera_10_unds_.png', name: 'Bolsas Papelera Blancas', description: 'x10und' },
        { image: 'bolsas_para_basura_verdes_casera_6_unds.png', name: 'Bolsas Casera Verdes', description: 'x6und' },
        { image: 'bolsas_para_basura_verdes_industrial_5_unds.png', name: 'Bolsas Industrial Verdes', description: 'x5und' },
        { image: 'bolsas_para_basura_verdes_papelera_10_unds.png', name: 'Bolsas Papelera Verdes', description: 'x10und' },
        { image: 'bolsas_patojito_aroma_vainilla.png', name: 'Bolsas Patojito Aroma Vainilla', description: 'Unidos' },
        { image: 'bolsas_zipper_unidos_18x20cm_x20und_(1).png', name: 'Bolsas Zipper', description: '18x20cm x20und' },
        { image: 'bolsas_zipper_unidos_x15x17cm_x30und_(1).png', name: 'Bolsas Zipper', description: '15x17cm x30und' },
        { image: 'bolsa_basura_unidos_casera.png', name: 'Bolsa de Basura Casera', description: 'Unidos' },
        { image: 'bolsas_para_basura_negras_industrial_5_unds.png', name: 'Bolsas Industrial Negras', description: 'x5und' },
        { image: 'lavaloza_unidos_limon_1000.png', name: 'Lavaloza Limón', description: 'Unidos x1000ml' },
        { image: 'limpiapisos_canela_unidos_x3000ml_cx6.png', name: 'Limpiapisos Canela', description: 'Unidos x3000ml' },
        { image: 'lavaloza_pahorrar_limon_500.png', name: 'Lavaloza Pa\'horrar Limón', description: 'Unidos x500ml' },
        { image: 'detergente_en_polvo_unidos_x2800gr.png', name: 'Detergente en Polvo', description: 'Unidos x2800gr' },
        { image: 'detergente_en_polvo_unidos_x500gr_(1).png', name: 'Detergente en Polvo', description: 'Unidos x500gr' },
        { image: 'detergente_floral_unidos_2000.png', name: 'Detergente Floral', description: 'Unidos x2000ml' },
        { image: 'lavaloza_unidos_chicle_1000.png', name: 'Lavaloza Chicle', description: 'Unidos x1000ml' },
        { image: 'esponjillas_unidos_x_6.png', name: 'Esponjillas', description: 'Unidos x6und' },
        { image: 'detergente_liquido_floral_unidos_x4000ml_cx4.png', name: 'Detergente Líquido Floral', description: 'Unidos x4000ml' },
        { image: 'kit_apartamento_bolsas_unidos.png', name: 'Kit Apartamento Bolsas', description: 'Unidos' },
        { image: 'lavaloza_crema_limon_x250gr.png', name: 'Lavaloza Crema Limón', description: 'Unidos x250gr' },
        { image: 'lavaloza_en_gel_chicle_unidos_x350g.png', name: 'Lavaloza en Gel Chicle', description: 'Unidos x350g' },
        { image: 'lavaloza_en_gel_limon_unidos_x350g.png', name: 'Lavaloza en Gel Limón', description: 'Unidos x350g' },
        { image: 'lavaloza_en_gel_uva_unidos_x350g.png', name: 'Lavaloza en Gel Uva', description: 'Unidos x350g' },
        { image: 'lavaloza_limon_unidos_3080ml.jpeg', name: 'Lavaloza Limón', description: 'Unidos x3080ml' },
        { image: 'lavaloza_liquido_frutos_rojos_unidos_x500ml.png', name: 'Lavaloza Líquido Frutos Rojos', description: 'Unidos x500ml' },
        { image: 'lavaloza_liquido_limon_unidos_3080ml.png', name: 'Lavaloza Líquido Limón', description: 'Unidos x3080ml' },
        { image: 'lavaloza_chicle_unidos_500.png', name: 'Lavaloza Chicle', description: 'Unidos x500ml' },
        { image: 'detergente_en_polvo_unidos_x1000gr_(1).png', name: 'Detergente en Polvo', description: 'Unidos x1000gr' },
        { image: 'lavaloza_liquido_limon_unidos_x1000.png', name: 'Lavaloza Líquido Limón', description: 'Unidos x1000ml' }
    ],
    'Lácteos': [
        { image: 'leche_galatea_x6_x900_(1).png', name: 'Leche Galatea', description: 'Pack x6 x900ml' },
        { image: 'leche_entera_uht_galatea_x900ml.jpeg', name: 'Leche Entera UHT Galatea', description: 'x900ml' },
        { image: 'leche_deslactosada_uht_galatea_x900ml.jpeg', name: 'Leche Deslactosada UHT Galatea', description: 'x900ml' },
        { image: 'queso_doble_crema_x_245g.png', name: 'Queso Doble Crema', description: 'Unidos x245g' },
        { image: 'queso_doble_crema_x200g.png', name: 'Queso Doble Crema', description: 'Unidos x200g' },
        { image: 'queso_doble_crema_unidos_x500g.png', name: 'Queso Doble Crema', description: 'Unidos x500g' },
        { image: 'leche_galatea_x6_x900.png', name: 'Leche Galatea', description: 'Pack x6 x900ml' },
        { image: 'leche_polvo_unidos_azucarada_800.png', name: 'Leche en Polvo Azucarada', description: 'Unidos x800g' },
        { image: 'queso_doble_crema_unidos_x400g.png', name: 'Queso Doble Crema', description: 'Unidos x400g' },
        { image: 'leche_uht_deslactosada_unidos_x1100ml_c3x6_2.png', name: 'Leche UHT Deslactosada', description: 'Unidos x1100ml' },
        { image: 'leche_uht_deslactosada_unidos_x_1100_ml.png', name: 'Leche UHT Deslactosada', description: 'Unidos x1100ml' },
        { image: 'leche_uht_entera_unidos_x1100_ml.png', name: 'Leche UHT Entera', description: 'Unidos x1100ml' },
        { image: 'leche_uht_entera_unidos_x900ml.png', name: 'Leche UHT Entera', description: 'Unidos x900ml' },
        { image: 'leche_unidos_entera_x6_x1100.png', name: 'Leche Entera', description: 'Pack x6 x1100ml' },
        { image: 'leche_unidos_entera_x6_x900.png', name: 'Leche Entera', description: 'Pack x6 x900ml' },
        { image: 'queso_doble_crema_unidos_x495.png', name: 'Queso Doble Crema', description: 'Unidos x495g' },
        { image: 'leche_en_polvo_unidos_x_380.png', name: 'Leche en Polvo', description: 'Unidos x380g' }
    ],
    'Panadería': [
        { image: 'super_combo_panadería_unidos_1000.png', name: 'Super Combo Panadería', description: 'Unidos x1000g' },
        { image: 'tostadas_unidos_x10und_cx23.png', name: 'Tostadas', description: 'Unidos x10und' },
        { image: 'pan_hamburguesa_unidos_x_500.png', name: 'Pan para Hamburguesa', description: 'Unidos x500g' },
        { image: 'pan_redondo_unidos_x15und_x315g.png', name: 'Pan Redondo', description: 'Unidos x15und' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    generateCategoriesHTML();
    
    const categoriesModal = document.getElementById('categoriesModal');
    if (!categoriesModal) return;

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'aria-hidden') {
                const isHidden = categoriesModal.getAttribute('aria-hidden') === 'true';
                if (!isHidden) {
                    initializeCarousels();
                }
            }
        });
    });

    observer.observe(categoriesModal, {
        attributes: true,
        attributeFilter: ['aria-hidden']
    });

    if (categoriesModal.getAttribute('aria-hidden') === 'false') {
        initializeCarousels();
    }
});

/**
 * Genera el HTML de todas las categorías dinámicamente
 */
function generateCategoriesHTML() {
    const modalBody = document.querySelector('#categoriesModal .categories-scroll');
    if (!modalBody) return;
    // Borrar todas las secciones existentes
    modalBody.innerHTML = '';
    // Usar Object.keys(productCategories) para cada categoría
    Object.keys(productCategories).forEach((categoryName) => {
        const products = productCategories[categoryName];
        if (!products || products.length === 0) return;
        modalBody.innerHTML += `
        <div class="timeline-item category-section">
            <div class="timeline-year category-year">${categoryName}</div>
            <div class="timeline-line"></div>
            <div class="category-carousel-wrapper">
                <button class="timeline-nav timeline-nav--prev" aria-label="Anterior">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div class="timeline-carousel category-carousel">
                    <div class="timeline-track category-track">
                        ${products.map(product => `
                        <div class="timeline-content product-card">
                            <div class="timeline-image product-image">
                                <img src="assets/images/productos/${product.image}" alt="${product.name}" loading="lazy">
                            </div>
                            <div class="timeline-text product-info">
                                <h4>${product.name}</h4>
                                <p>${product.description}</p>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>
                <button class="timeline-nav timeline-nav--next" aria-label="Siguiente">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
        `;
    });
}

/**
 * Inicializa todos los carruseles de categorías
 */
function initializeCarousels() {
    const carouselSections = document.querySelectorAll('.category-section');
    carouselSections.forEach((section) => {
        const wrapper = section.querySelector('.category-carousel-wrapper');
        const carousel = section.querySelector('.category-carousel');
        const track = section.querySelector('.category-track');
        const products = section.querySelectorAll('.product-card');
        const prevBtn = section.querySelector('.timeline-nav--prev');
        const nextBtn = section.querySelector('.timeline-nav--next');
        
        if (!track || !products.length || !prevBtn || !nextBtn || !carousel) return;
        
        // Evitar reinicializar
        if (prevBtn.dataset.initialized === 'true') return;
        prevBtn.dataset.initialized = 'true';
        
        let currentIndex = 0;
        let itemsPerView = getProductsPerView();
        
        function getProductsPerView() {
            const width = window.innerWidth;
            if (width <= 768) return 1;
            return 2;
        }
        
        function updateCarousel() {
            const carouselWidth = carousel.offsetWidth;
            const gap = 32; // 2rem = 32px
            
            // Calcular el ancho de cada item basado en itemsPerView
            const itemWidth = (carouselWidth - (gap * (itemsPerView - 1))) / itemsPerView;
            
            // Calcular el offset
            const offset = currentIndex * (itemWidth + gap);
            
            track.style.transform = `translateX(-${offset}px)`;
            
            // Actualizar botones
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= products.length - itemsPerView;
        }
        
        function navigate(direction) {
            const maxIndex = Math.max(0, products.length - itemsPerView);
            currentIndex += direction;
            
            if (currentIndex < 0) currentIndex = 0;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            
            updateCarousel();
        }
        
        prevBtn.onclick = () => navigate(-1);
        nextBtn.onclick = () => navigate(1);
        
        // Recalcular al redimensionar
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                itemsPerView = getProductsPerView();
                currentIndex = 0; // Reset al redimensionar
                updateCarousel();
            }, 250);
        });
        
        // Soporte táctil
        let touchStartX = 0;
        let touchEndX = 0;
        
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                navigate(diff > 0 ? 1 : -1);
            }
        }, { passive: true });
        
        // Inicializar
        updateCarousel();
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeCarousels, productCategories, generateCategoriesHTML };
}

