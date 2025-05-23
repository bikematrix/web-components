declare interface Bike {
    bikeSpec: string;
    brand: string;
    brandId: number;
    frameSeries: string;
    frameSeriesId: number;
    images: string[];
    key: string;
    model: string;
    modelId: number;
    name: string;
    variant: string | null;
    year: number;
    _key: string;
}

declare interface BikeMatrixConfig {
    isShopify?: boolean;
    skuField?: "sku" | "barcode" | "metafield";
    apiUrl?: string;
    apiKey?: string;
    apiToken?: string;
    categories?: Array<{
        title: string;
        text_id: string;
        collection: string;
    }>;
    collections?: Array<{
        title: string;
        handle: string;
        url: string;
    }>;
    currentCollectionHandle?: string;
    pageType?: "collection" | "product" | "index" | "search";
    showHomePageCollection?: boolean;
    showSearchPageCollection?: boolean;
    designMode?: boolean;
    bikeSelectorBrands?: string;
    productsCollections?: {
        [key: string]: string[];
    };
    isHomePage?: boolean;
    isSearchPage?: boolean;
    products?: {
        [key: string]: {
            skus: string[];
            productUrl: string;
            productTitle: string;
            featuredImage: string;
            price: string;
            priceFrom: string;
            [key: string]: any;
        };
    };
    collectionUrl?: string;
    compatiblityListCurrentPage?: number;
    showCompatibleList?: boolean;
    sku?: string;
    productCollections?: string[];
    logLevel?: "none" | "verbose";
    virtualWorkshop?: boolean;
}

declare const _default: {
    isInitialized: () => boolean;
    init: (config?: Partial<BikeMatrixConfig>) => Promise<void>;
    refresh: () => void;
    destroy: () => Promise<void>;
    reload: (shouldReloadConfig?: boolean) => void;
    reset: () => void;
    getConfig: () => BikeMatrixConfig;
    getCurrentBike: () => Bike;
    getActiveSubscription: () => boolean;
    updateConfig: (config: Partial<BikeMatrixConfig>) => void;
    updateSku: (sku: string) => void;
};
export default _default;

export { }
