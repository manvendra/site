import React from 'react'

import Home from './components/homepage/Home';
import BlogPosts from './components/blog-post/BlogPosts';
import Photography from './components/photography/Photography';
import AboutMe from './components/about/AboutMe';

import PostsList from './components/blog-post/PostsList';
import Post from './components/blog-post/Post';
import NotFound from './common/NotFound';

import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from "framer-motion"
import ProductReview from './components/reviews/ProductReview';
import Akshay from './components/reviews/Akshay';
import PrimeDay from './components/reviews/PrimeDay';
import PostEditor from './components/editor/PostEditor';
import Apple from './components/reviews/Apple';


function AnimatedRoutes() {
    //Wasn't able to use useLocation outside of router so created this
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/posts' element={<BlogPosts />} >
                    <Route index element={<PostsList />} />
                    <Route path='list' element={<PostsList />} />
                    <Route path=':postId' element={<Post />} />
                </Route>
                <Route path='/photos' element={<Photography />} />
                <Route path='/about' element={<AboutMe />} />
                <Route path="/reviews" element={<ProductReview />} />
                <Route path="/aksh" element={<Akshay />} />
                <Route path="/apple" element={<Apple />} />
                <Route path='/primeDeals' element={<PrimeDay/>}/>
                <Route path='/new-post' element={<PostEditor/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes