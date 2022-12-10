import cv2 
import os
from PIL import Image
import numpy as np
import re
import requests
from typing import List


FRAME_DIR = './frames'
BLACK_CHAR = '@'  #'▇'
WHITE_CHAR = ' ' # 'ㅤ' # hangul filter
FRAME_SIZE = (-1, -1)


WEBHOOK_URI     = 'https://discord.com/api/webhooks/1050573719501807716/8q925mA2STA3ietP6ot4yJiH8iYn5q7-E8iGXUyM_PkOUvCBQD50Aw288d86GofwUU_7'
WEBHOOK_ID      = '1050573719501807716'
CHANNEL_ID      = '1050567603195752450'
GUILD_ID        = '1050567602411425822'
WEBHOOK_TOKEN   = '8q925mA2STA3ietP6ot4yJiH8iYn5q7-E8iGXUyM_PkOUvCBQD50Aw288d86GofwUU_7'

def clear_screen():
    if os.name == 'nt': os.system('cls')
    else: os.system('clear')



def vid_to_grayscale_frames(path: str) -> List[np.ndarray]:
    frames: List[np.ndarray] = []
    frame: np.ndarray
    rgb_weight = [0.2989, 0.5870, 0.1140]

    capture = cv2.VideoCapture(path)
    success, frame = capture.read() 
    while success:
        grayscale = np.dot(frame[...,:3], rgb_weight)
        frames.append(grayscale)
        success, frame = capture.read()
    return frames    
        
def main():
    frames : List[np.ndarray] = vid_to_grayscale_frames('./badapple.mkv')
    for frame in frames: 
        frame_height, frame_width = frame.shape

        ascii_frame = []  
        for h in range(frame_height):
            ascii_row : List[str] = []
            for w in range(frame_width):
                brightness = frame[h][w] 
                if brightness < 0.005: ascii_row.append(BLACK_CHAR)
                else: ascii_row.append(WHITE_CHAR)
            ascii_frame.append(''.join(ascii_row))
        clear_screen()
        print('\n'.join(ascii_frame))
            

if __name__ == '__main__':
    main()