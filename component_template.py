from os import mkdir, path

component_name = input('file name(without extension): ')
component_parent_dir = "./Components"
component_path = path.join(component_parent_dir, component_name)

style_name = component_name[0].lower() + component_name[1:]
styles_parent_dir = "./styles"
styles_path = path.join(styles_parent_dir, component_name)

TSX_TEMPLATE = f'import styles from "@/styles/{component_name}/{style_name}.module.scss";\n\nconst {component_name} = () => {{\nreturn <></>;\n}};\n\nexport default {component_name};'
SCSS_TEMPLATE = '@import \'../_variables.scss\''

mkdir(component_path)
mkdir(styles_path)

with open(f'./{component_path}/{component_name}.tsx', 'w') as file:
    file.write(TSX_TEMPLATE)

with open(f'./{styles_path}/{style_name}.module.scss', 'w') as file:
    file.write(SCSS_TEMPLATE)
