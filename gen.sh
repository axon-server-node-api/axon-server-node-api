PROTO_PATH=src/main/proto
OUT_DIR=lib

rm -rf $OUT_DIR
mkdir $OUT_DIR

grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --grpc_out=generate_package_definition:$OUT_DIR \
    -I $PROTO_PATH \
    $PROTO_PATH/*.proto

grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:$OUT_DIR \
    -I $PROTO_PATH \
    $PROTO_PATH/*.proto
