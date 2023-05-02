import Head from "next/head";

type Props = {
    title: string;
}

export default function HeadMeta(props: Props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Making digital experiences better for local businesses." />
            <link rel="icon" href="./favicon.ico" />
        </Head>
    );
}