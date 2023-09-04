'use client';
import { useState, useEffect } from 'react';
import { getCategory } from '@/api';
import { getCookies, setCookies } from '@/utils/Cookies';
import {
  ALLOWED_CATEGORY,
  ALLOWED_CATEGORY_SLUG,
  USER_LOCATION,
  CONTEST_TYPES,
} from '@/utils/Constant';

export default function useCategory() {
  const [category, setCategory] = useState();

  const getQuizCategory = async () => {
    const { countryCode } = getCookies(USER_LOCATION);
    const categoryList = await getCategory();

    let allowedCategory = [];
    let allowedCategorySlug = [];
    for (let category of categoryList) {
      if (!category?.country || category.country === countryCode) {
        allowedCategory.push(category);
        allowedCategorySlug.push(category.slug);
      }
    }

    allowedCategory = [...CONTEST_TYPES, ...allowedCategory];
    setCookies(ALLOWED_CATEGORY, allowedCategory);
    setCookies(ALLOWED_CATEGORY_SLUG, allowedCategorySlug);

    return allowedCategory;
  };

  useEffect(() => {
    const category = getCookies(ALLOWED_CATEGORY);
    if (!category) {
      getQuizCategory().then((allowedCategory) => setCategory(allowedCategory));
    } else {
      setCategory(category);
    }
  }, []);

  if (!category) {
    return [[], true];
  }

  return [category, false];
}
