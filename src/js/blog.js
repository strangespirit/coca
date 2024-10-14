import '/scss/blog.scss';

import { useTheme } from './components/theme.js';
useTheme()
import { useBurger } from './components/burger.js';
useBurger();
import { useAccordeon } from './components/accordeon.js';
useAccordeon();
import { useTabs } from './components/blog/tabs.js';
useTabs();
import { useHeroSlider } from './components/blog/hero-slider.js';
useHeroSlider();
import { useArticlesSlider } from './components/blog/articles-slider.js';
useArticlesSlider();