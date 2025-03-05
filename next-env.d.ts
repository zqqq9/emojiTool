/// <reference types="next" />
/// <reference types="next/image-types/global" />

// 为自定义类型声明添加注释
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 