/**
 * Pobla el archivo products.json con los objetos de productos
 * para el funcionamiento estático del carrito de cotización.
 *
 * Funcionamiento del carrito de cotización:
 * - Los artículos se guardan como slugs en localStorage.
 * - El carrito renderiza los productos utilizando la información
 *   presente en products.json.
 *
 * Este flujo permite:
 * - No depender de base de datos en producción.
 * - Mantener el carrito completamente estático.
 * - Separar el funcionamiento en runtine (carrito de cotización con datos en products.json) y build time (products-showcase, product-detail y products.json).
 */

import fs from 'fs';
import path from 'path';
import { supabase } from '../src/lib/supabase';

console.log('🚀 Starting generate-products.ts script...');

try {
    console.log('📡 Fetching products from Supabase...');
    const { data: products, error } = await supabase
        .from('products')
        .select(`
        slug,
        name,
        warranty,
        led_power,
        max_luminous_flux,
        efficiency,
        main_image
      `);

    if (error) {
        console.error('❌ Supabase Error:', JSON.stringify(error, null, 2));
        throw error;
    }

    console.log(`✅ Fetched ${products?.length || 0} products.`);

    const outPath = path.resolve('src/data/products.json');
    console.log(`💾 Writing to ${outPath}...`);

    // Ensure directory exists
    const dir = path.dirname(outPath);
    if (!fs.existsSync(dir)) {
        console.log(`P Creating directory ${dir}...`);
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outPath, JSON.stringify(products, null, 2));

    console.log('✅ products.json generated successfully');
} catch (err) {
    console.error('🔥 Unexpected Error in generate-products.ts:', err);
    process.exit(1);
}