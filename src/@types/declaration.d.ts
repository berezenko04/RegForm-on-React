declare module '*.module.scss' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.module.scss' {
    const content: any;
    export default content;
}