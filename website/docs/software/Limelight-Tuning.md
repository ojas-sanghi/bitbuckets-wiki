---
title: Tuning the Limelight
---

## Intro

We use the Limelight for vision processing, and here's a general breakdown for how to tune it from scratch  
The info here was about the 2020 season, but it should apply more broadly to other seasons/targets as well.  

- Here's a link to what 2020's target [looks like](https://i.imgur.com/LnuB8Tz.png) (we're aiming for the top goal)  
- Here's the target we made for [practice](https://i.imgur.com/c1xEeja.png) (ignore the black string, that was for stability)  
  - The gray tape is the retro-reflective tape; what the limelight sees!

You can always visit the [Limelight Docs](https://docs.limelightvision.io/en/latest/vision_pipeline_tuning.html) to see what each feature does regarding tuning

## Tuning
---
[Here's](https://i.imgur.com/rM0qlI0.png) a general overview posted by another team on CD, although it could be a bit confusing.

---

1. Keep it in color mode
2. Mess with the exposure and black offset level till the green is really prominent
   1. You can also mess with the red and blue stuff but I've never experimented with that, and the LL people recommend to *keep it at its defaults*
3. Click on thresholding (not threshold mode - it's on the top bar)
4. As a place to start, use the eyedropper tool and click on the target
5. After that, switch to threshold mode
6. Then, change all of the sliders to their maximum (aside from erosion and dilation)
7. Then decrease them one at a time; stop when you start losing the target 
   1. Don't worry about the boxes working, that'll come later. 
   2. Worry about the white part being as white and thick as possible
   3. **Value** is probably going to be the most important so just decrease the first two to where it's not crazy noisy then work on value, then come back to the others
   
:::note
Or, just do it however you find it best. It doesn't necessarily have to be in this order, this is just what I find to be the best.
:::

:::info
If it's really thin then try increasing the dilation to 1, it should make it really thick  
If you do this, do it **BEFORE** contour filtering! Otherwise, you'll have to re-do the contour stuff
:::

8. Switch to contour filtering
9. Most likely fullness and W/H ratio are going to be the most important, so set those to the maximum then lower them until the bounding boxes fit as best as they can.
   1. You shouldn't have to mess with the others probably 

---
**2020-specific**:

In 2020, we set each pipeline to a different zoom level (and tuned it again for each zoom level!)  
Then in the codebase, we switched between the zoom levels based on our distance from the target (or tried to, anyways. We were never able to finish writing that code)
If you're looking at this in the future, these are probably irrelevant:

When tuning the different pipelines, then ensure:  
pipeline 0: no zoom, no pan  
pipeline 1: 2x zoom, PAN Y (in output) is 1  
pipeline 2: 3x zoom, PAN Y (in output) is 1  

---

There you go, a successfully tuned Limelight!  
Make sure to test it in various lighting conditions and continue tweaking your pipeline as needed.

Know that when you go to competitions, you might have to re-tune to adjust for the light. You can try to compensate for this by tuning in a brightly-lit place before competition then turning down the exposure/increasing the black level offset at competition.