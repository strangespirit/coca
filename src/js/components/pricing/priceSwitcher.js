export const usePriceSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const starterPrice = document.querySelector('[data-price="starter"]');
    const popularPrice = document.querySelector('[data-price="popular"]');
    const enterprisePrice = document.querySelector('[data-price="enterprise"]');
    const starterTerm = document.querySelector('[data-price="starterterm"]');
    const popularTerm = document.querySelector('[data-price="popularterm"]');
    const enterpriseTerm = document.querySelector('[data-price="enterpriseterm"]');

    const priceList = {
        starter: {
            default: "$120",
            withSale: "$1152",
        },
        popular: {
            default: "$1680",
            withSale: "$16128",
        },
        enterprise: {
            default: "$2520",
            withSale: "$24192",
        },
        starterterm: {
            default: "/mo",
            withSale: "/yr",
        },
        popularterm: {
            default: "/mo",
            withSale: "/yr",
        },
        enterpriseterm: {
            default: "/mo",
            withSale: "/yr",
        },
    };

    const setPriceswithSale = () => {
        starterPrice.textContent = priceList.starter.withSale;
        popularPrice.textContent = priceList.popular.withSale;
        enterprisePrice.textContent = priceList.enterprise.withSale;
        starterTerm.textContent = priceList.starterterm.withSale;
        popularTerm.textContent = priceList.popularterm.withSale;
        enterpriseTerm.textContent = priceList.enterpriseterm.withSale;
    };

    const setDefaultPrices = () => {
        starterPrice.textContent = priceList.starter.default;
        popularPrice.textContent = priceList.popular.default;
        enterprisePrice.textContent = priceList.enterprise.default;
        starterTerm.textContent = priceList.starterterm.default;
        popularTerm.textContent = priceList.popularterm.default;
        enterpriseTerm.textContent = priceList.enterpriseterm.default;
    };

    switcher.checked = true;
    setPriceswithSale();

    switcher.addEventListener('click', () => {
        if (switcher.checked) {
            setPriceswithSale();
        } else {
            setDefaultPrices();
        }
    });
};