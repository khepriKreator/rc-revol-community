/**
 *
 * @desc константа с кнфигурацией из переменных окружения,
 * значения доступные в объекте "import.meta.env" берутся из фалов .env
 *
 * @link https://vitejs.dev/guide/env-and-mode
 * */
export const ENV = {
    API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT
}