import React, { useEffect, useState } from 'react';
import './Avatar.css';

const classNames = require('classnames');
function Avatar(props) {

	let loadedAvatars = [];
	let loading = false;
	let src = props.src;
	let isLazyImage = false;
	let _isMounted = false;

	useEffect(() => {
		_isMounted = true;

		if (props.lazyLoadingImage) {
			isLazyImage = true;

			if (!isLoaded(src)) {
				src = props.lazyLoadingImage;

				if (!loading) {
					requestImage(props.src);
				}
			}
			else {
				isLazyImage = false;
			}
		}

		return () => {
			_isMounted = false;
		}
	}, []);

	const isLoaded = (src) => {
		return loadedAvatars.indexOf(src) !== -1;
	}

	const requestImage = (src) => {
		loading = true;

		var loaded = () => {
			loadedAvatars.push(src);
			loading = false;
		};

		var img = document.createElement('img');
		img.src = src;
		img.onload = loaded;
		img.onerror = loaded;
	}

	const stringToColour = (str) => {
		var hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		var colour = '#';
		for (let i = 0; i < 3; i++) {
			var value = (hash >> (i * 8)) & 0xFF;
			value = (value % 150) + 50;
			colour += ('00' + value.toString(16)).substr(-2);
		}
		return colour;
	}

	return (
		<div className={classNames('rce-avatar-container', props.type, props.size, props.className)}>
			{
				props.letterItem ?
				<div
					className='rce-avatar-letter-background'
					style={{ backgroundColor: stringToColour(props.letterItem.id)}}>
					<span className='rce-avatar-letter'>
						{props.letterItem.letter}
					</span>
				</div>
				:
				<img
					alt={props.alt}
					src={src}
					onError={props.onError}
					className={classNames(
						'rce-avatar',
						{'rce-avatar-lazy': isLazyImage},
					)} />
			}
			{props.sideElement}
		</div>
	);
}

Avatar.defaultProps = {
	type: 'default',
	size: 'default',
	src: '',
	alt: '',
	sideElement: null,
	lazyLoadingImage: undefined,
	onError: () => void(0),
};

export default Avatar;
