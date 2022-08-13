import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',

                'public\admin\css\material-dashboard.css',
                'public\admin\js\bootstrap-material-design.min.js',
                'public\admin\js\jquery.min.js',
                'public\admin\js\perfect-scrollbar.jquery.min.js',
                'public\admin\js\popper.min.js',

            ],
            refresh: true,
        }),
    ],
});
