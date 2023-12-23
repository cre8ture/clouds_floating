
# Animated Text Landscape with Floating Cloud Clusters

## Description
This project creates a animation using p5.js, a JavaScript library for creative coding. The animation features a dynamic, wave-like text terrain that undulates over time, creating a 3D-like landscape effect. Above this terrain, clusters of the word "cloud" float gently across the canvas, resembling clouds drifting in the sky.

## Features
- **Wave-Like Text Terrain**: A half-screen landscape of text that moves and changes to create a wave-like effect.
- **Floating Cloud Clusters**: Small clusters of the word "cloud" that move horizontally across the upper part of the canvas, emulating clouds.
- **Mouse Interaction**: The text terrain reacts to mouse movement, creating a parting effect where the text seems to move away from the cursor.
- **Dynamic Animation**: Both the text terrain and the clouds are animated to simulate continuous movement.

## Mathematical Algorithms
This project employs several mathematical concepts and algorithms:

1. **Perlin Noise**: Used to generate the undulating, wave-like motion of the text terrain. Perlin noise provides smooth, random-like variations, ideal for natural-looking movements.

2. **Polar to Cartesian Coordinate Transformation**: Applied to position the words within each cloud cluster. This transformation allows words to be placed in a circular, cloud-like pattern.

3. **Linear Interpolation (lerp)**: Utilized in mapping noise values to visual properties like text size and position, aiding in creating the 3D landscape illusion.

4. **Distance Calculation**: Employed in the mouse interaction feature, where the distance of each text element from the mouse cursor affects its movement.

5. **Trigonometry**: Used for calculating the positions of words in the cloud clusters and for various aspects of the animated landscape.

## Usage
To experience the animation, open the HTML file in a web browser. Move your mouse across the canvas to interact with the text terrain.

## Libraries Used
- [p5.js](https://p5js.org/)

## Contributing
Contributions to enhance the project are welcome. Feel free to fork the repository and submit pull requests.

## License
This project is released under the [MIT License](LICENSE.md).
