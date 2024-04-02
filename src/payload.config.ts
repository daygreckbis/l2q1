import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [],
    routes: {
        admin: "/toto"
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- EcoPowerDrive",
            favicon: "/favicon.ico",
            ogImage: "/thumbnail.jpg"
        }
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: postgresAdapter({
        pool:{
            host: "127.0.0.1",
            port: 5432,
            user: "postgres",
            password: "Nahapnlqlf33",
            database: "postgres",
        }
    }),
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts")
    }
})