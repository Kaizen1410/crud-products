<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $search=$request->query('search');
        $products = Product::where('type', 'like', '%'. $search .'%') -> paginate(5);
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $product = new Product();
        $product->type = $request->type;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->save();

        return response()->json(['data' => $product, 'message' => 'Stuff Added'], 201);
    }

    public function show($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }
        $product->type = $request->type;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->save();

        return response()->json(['data' => $product, 'message' => 'Stuff Edited'], 201);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }
        $product->delete();

        return response()->json(['data' => $product, 'message' => 'Stuff Deleted'], 201);

        // return response()->json(['message' => 'Stuff Deleted'], 204);
    }
}

