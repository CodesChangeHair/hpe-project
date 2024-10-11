import sys
import os

def process_file(file_path):
    # 假设我们将文件内容改为大写并保存为新文件
    # with open(file_path, 'r') as file:
    #     content = file.read()

    # processed_content = content.upper()  # 示例处理（将内容转为大写）
    processed_file_path = os.path.splitext(file_path)[0] + 'processed.txt'
    
    with open(processed_file_path, 'w') as file:
        file.write("hello, world")

    return processed_file_path

if __name__ == '__main__':
    input_file_path = sys.argv[1]  # 获取文件路径
    output_file_path = process_file(input_file_path)
    print(output_file_path)  # 输出处理后的文件路径
