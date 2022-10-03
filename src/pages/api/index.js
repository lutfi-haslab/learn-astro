export async function get() {
    return new Response(JSON.stringify({
        'data': "Haloo"
    }))
}